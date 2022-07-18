import axios from "axios";
import { runCallback, createObject, getData } from "./demo";

jest.mock("axios");

test("测试 runCallback", () => {
  const func = jest.fn();
  //! 1. mock函数，捕获函数的调用,函数的返回结果，以及this指向
  //! 2. 可以只有设置返回结果
  // func.mockReturnValueOnce("dell").mockReturnValueOnce("lee");
  func.mockReturnValue("dellll");
  runCallback(func);
  runCallback(func);
  expect(func.mock.calls[0]).toEqual(["abc1"]);
  expect(func).toBeCalled();
  console.log(func.mock);
});

test("测试 createObject", () => {
  const func = jest.fn();
  createObject(func);
  expect(func).toBeCalled();
});

test("测试 getData", async () => {
  //! 3. 改变函数的内部实现
  axios.get.mockResolvedValue({ data: "hello" });
  await getData().then((data) => {
    expect(data).toBe("hello");
  });
});
