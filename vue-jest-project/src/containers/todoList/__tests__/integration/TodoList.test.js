import { mount } from "@vue/test-utils";
import TodoList from "@/containers/todoList/TodoList";
import UndoList from "@/containers/todoList/components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";
import store from "../../../../store";

import axios from "../../__mocks__/axios";

beforeEach(() => {
  axios.success = true; //todo 每次调用都自动修改success为true
  jest.useFakeTimers(); //todo 模拟原生的timer，可以快进setTimeout
  //todo 放在生命周期中setTimeout的调用次数统计会重新计算
});

it(`
  1.用户会在header输入框输入内容
  2.用户点击回车按钮
  3.列表项应该增加用户输入内容的列表项
`, async () => {
  const wrapper = mount(TodoList, { store });
  const inputElem = findTestWrapper(wrapper, "input").at(0);
  const content = "Dell Lee";
  inputElem.setValue(content);
  inputElem.trigger("change");
  inputElem.trigger("keyup.enter");
  await wrapper.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "item");
  expect(listItems.length).toBe(1);
});

// it(`
//   1.用户进入页面时，等待5秒
//   2.列表应该展示远程返回的数据
// `, (done) => {
//   const wrapper = mount(TodoList, { store });

//   jest.runAllTimers();

//   wrapper.vm.$nextTick(() => {
//     const listItem = findTestWrapper(wrapper, "item");
//     expect(listItem.length).toBe(2);
//     done()
//   });

//   //todo 测试用例会忽略异步函数 因此写异步用例需要使用done
//   // setTimeout(() => {
//   //   const listItem = findTestWrapper(wrapper, "item");
//   //   expect(listItem.length).toBe(2);
//   //   done();
//   // }, 5500);

//   // wrapper.vm.$nextTick(() => {
//   //   const listItem = findTestWrapper(wrapper, "item");
//   //   expect(listItem.length).toBe(2);
//   // });
// });

it(`
  1.用户进入页面时,请求远程数据失败
  2.列表应该展示空数据
`, (done) => {
  axios.success = false;
  const wrapper = mount(TodoList, { store });

  wrapper.vm.$nextTick(() => {
    const listItem = findTestWrapper(wrapper, "item");
    expect(listItem.length).toBe(0);
    done();
  });
});

it(`
  1.用户进入页面，输入框初始内容为空
  2.输入数据之后点击回车，添加新的内容，且输入框内容重置为空
  3.点击删除按钮，删除一个内容
`, async () => {
  const wrapper = mount(TodoList, { store });
  const headerInput = findTestWrapper(wrapper, "input").at(0);
  expect(headerInput.exists()).toBe(true);
  expect(store.state.inputValue).toBe("");
  await headerInput.setValue("add one");
  expect(store.state.inputValue).toBe("add one");
  // headerInput.trigger("change");
  headerInput.trigger("keyup.enter");
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: "div", value: "add one" },
  ]);
  expect(store.state.inputValue).toBe("");

  await wrapper.vm.$nextTick(); // 出现emit操作需要等待
  const listItems = findTestWrapper(wrapper, "item");
  expect(listItems.length).toBe(1);

  const undoListItemDelete = findTestWrapper(wrapper, "delete-button").at(0);
  undoListItemDelete.trigger("click");
  await wrapper.vm.$nextTick();
  expect(findTestWrapper(wrapper, "item").length).toBe(0);
});
