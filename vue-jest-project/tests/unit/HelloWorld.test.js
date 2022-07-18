import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "Vue";

//todo shallowMount只会渲染当前组件，不会渲染子组件
//todo mount 会渲染当前组件和他的子组件 适用于集成测试
describe("HelloWorld.vue", () => {
  // it("renders props.msg when passed", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });

  it("组件渲染正常", () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: "dee lee" },
    });
    expect(wrapper).toMatchSnapshot(); //TODO UI测试时 适用于快照测试场景
  });
});

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const root = document.createElement("div");
    root.className = "root";
    document.body.appendChild(root);
    new Vue({
      render: (h) =>
        h(HelloWorld, {
          props: {
            msg: "dell lee",
          },
        }),
    }).$mount(".root");
    expect(document.getElementsByClassName("hello").length).toBe(1);

    console.log(document.body.innerHTML);
  });
});
