import { shallowMount } from "@vue/test-utils";
import TodoList from "@/containers/todoList/TodoList";
import Header from "@/containers/todoList/components/Header";

import Undolist from "@/containers/todoList/components/Undolist";

describe("TodoList组件", () => {
  it("初始化时，undoList应该为空", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it("addUndoList 增加一个内容", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.addUndoItem(4);
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
      { status: "div", value: 4 },
    ]);
  });

  it("使用undolist，应该传递list参数", () => {
    const wrapper = shallowMount(TodoList);
    const undolist = wrapper.find(Undolist);
    const list = undolist.props("list");
    expect(list).toBeTruthy();
  });

  it("handleDeleteItem 方法被调用时，undolist列表内容减少", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.handleItemDelete(1);
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 3 },
    ]);
  });
});

//! 先写测试再开发 测试与逻辑代码会有耦合，导致修改业务逻辑时会去修改两次代码，TDD并不适合于我们业务逻辑的开发模式
//! 函数库的单元测试：TDD + 单元测试的方案，因为函数与单元测试是解耦的，这时候使用这样的开发模式很适用
