import { shallowMount } from "@vue/test-utils";
import Undolist from "@/containers/todoList/components/Undolist";
import { findTestWrapper } from "../../../../utils/testUtils";

describe("Undolist", () => {
  it(" 参数为空数组，count值应该为0，且列表无内容", () => {
    const wrapper = shallowMount(Undolist, {
      propsData: { list: [] },
    });
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "item");
    expect(countElem.at(0).text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });

  it("list 参数为[1,2,3]，count值应该为3，且列表有内容，且存在删除按钮", () => {
    const wrapper = shallowMount(Undolist, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const counElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "item");

    const deleteBtns = findTestWrapper(wrapper, "delete-button");
    expect(counElem.at(0).text()).toEqual("3");
    expect(listItems.length).toEqual(3);
    expect(deleteBtns.length).toEqual(3);
  });

  it("list 删除按钮被点击时，向外触发删除事件", () => {
    const wrapper = shallowMount(Undolist, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });

    const deleteBtns = findTestWrapper(wrapper, "delete-button").at(1);
    deleteBtns.trigger("click");
    console.log(wrapper.emitted().delete);
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});
