test("toBe 匹配器", () => {
  // toBe 匹配器 matchers Object.is ===
  const a = { one: 1 };
  expect(a).toBe(a);
});

test("toEqual 匹配器", () => {
  // toEqual 匹配器 递归遍历每个数值是否相等
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});

test("toBeNull 匹配器", () => {
  // toBeNull 匹配器
  const a = null;
  expect(a).toBeNull();
});

test("toBeDefined 匹配器", () => {
  // toBeDefined 匹配器
  const a = null;
  expect(a).toBeDefined();
});

test("toBeTruthy 匹配器", () => {
  // toBeTruthy 匹配器
  const a = 1;
  expect(a).toBeTruthy();
});

test("toBeFalsy 匹配器", () => {
  // toBeTruthy 匹配器
  const a = 0;
  expect(a).toBeFalsy();
});

test("not 匹配器", () => {
  // toBeTruthy 匹配器
  const a = 1;
  expect(a).not.toBeFalsy();
});

// 数字相关的匹配器
test("toBeGreaterThan", () => {
  const count = 9;
  expect(count).toBeLessThan(11);
});

test("toBeGreaterThanOrEqual", () => {
  const count = 9;
  expect(count).toBeGreaterThanOrEqual(9);
});

test("toBeCloseTo", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

// String 相关

test("toMatch", () => {
  const str = "http://www.baidu.com";
  expect(str).toMatch("ww");
});

// Array, Set
test("toContain", () => {
  const arr = ["lee", "jack"];
  const data = new Set(arr);
  expect(data).toContain("jack");
});

// 异常
const throwNewErrorFunc = () => {
  throw new Error("this is an1 new error");
};

test("toThrow", () => {
  expect(throwNewErrorFunc).toThrow("this is an1 new error");
});
