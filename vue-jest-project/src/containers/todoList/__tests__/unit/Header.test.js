import { shallowMount } from "@vue/test-utils";
import Header from "@/containers/todoList/components/Header.vue";
import { findTestWrapper } from "../../../../utils/testUtils";

describe("Header组件", () => {
  it("存在input框", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input");
    expect(input.exists()).toBe(true); // input 元素是否存在
  });

  it("input框 初始内容为空", () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("");
  });

  it("input发生变化 数据跟随变化", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input");
    input.setValue("dell lee");
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("dell lee");
  });

  it("input 输入回车，无内容时，无反应", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input");
    input.setValue("");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeFalsy(); // 回车为空时 不应该向外面触发一个add事件
  });

  it("input 输入回车，有内容时，向外触发事件,同时清空inputValue", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input");
    input.setValue("dell lee");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeTruthy();
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("");
  });

  it("header 样式发生改变，做提示", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  });
});
