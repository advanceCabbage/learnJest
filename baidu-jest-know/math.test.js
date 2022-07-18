// function expect(result) {
//   return {
//     toBe: function (actual) {
//       if (actual !== result) {
//         throw new Error(
//           `预期值和实际值不相等，预期${result},结果却是${actual}`
//         );
//       }
//     },
//   };
// }
// function test(desc, fn) {
//   try {
//     fn();
//     console.log(`${desc}通过测试`);
//   } catch (error) {
//     console.log(`${desc}没有通过测试`);
//   }
// }

//! 单元测试  -- 模块测试
//! 集成测试  -- 多个模块测试
//TODO ES5 CommonJS方式引入，Jest默认支持
// const math = require("./math");
// const { add, minus, multi } = math;

//TODO ES6方式引入，需要使用babel进行转译
import { add, minus, multi } from "./math";
test("测试加法", () => {
  expect(add(3, 7)).toBe(10);
});
test("测试减法", () => {
  expect(minus(3, 3)).toBe(0);
});
test("测试乘法", () => {
  expect(multi(3, 3)).toBe(9);
});
