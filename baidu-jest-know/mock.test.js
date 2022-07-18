jest.mock("./mock");

// jest.unmock("./mock"); //todo  取消对mock这个文件的模拟
import { fetchData } from "./mock";

//todo requireActual的作用在于处理有个别函数不需要用__mock__文件中文件获取时,会在真实的文件中去获取
const { getNum } = jest.requireActual("./mock");

test("fetchData 测试", () => {
  return fetchData().then((data) => {
    expect(eval(data)).toEqual(123);
  });
});

test("getNum 测试", () => {
  expect(getNum()).toEqual(123);
});
