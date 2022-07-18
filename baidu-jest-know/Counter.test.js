import Counter from "./Counter";

let counter = null;

//! JEST内置的勾子函数 会在所有测试用例执行之前执行
beforeAll(() => {});

//! afterAll 会在所有测试用例执行完成之后执行
afterAll(() => {});

//! beforeEach会在每个测试用例执行之前执行一次
beforeEach(() => {
  counter = new Counter();
});

//! afterEach 会在每个测试用例执行之后会执行一次
afterEach(() => {});

//! describe 分组
describe("测试增加相关的代码", () => {
  test("测试 Counter 中的 addOne方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test("测试 Counter 中的 addTwo方法", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe("测试减少相关的代码", () => {
  test("测试 Counter 中的 minusOne方法", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });

  test("测试 Counter 中的 minusOne方法", () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});
