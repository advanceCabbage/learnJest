jest.mock("./util");
// jest.mock 发现util是一个类，会自动把类的构造函数和方法变成 jest.fn()
import demoFunction from "./utilDemo";
import Util from "./util";

test("测试 demofunction", () => {
  demoFunction();
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
});

//! jest 是在node环境中执行，但是node中无dom节点，但是jest在node中模拟了一套dom 的domApi,JSDom
