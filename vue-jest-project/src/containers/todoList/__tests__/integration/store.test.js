import store from "../../../../store";

it("当store接收changeInputValue 的commit时，inputValue发生变化", () => {
  const value = "123";
  store.commit("changeInputValue", value);
  expect(store.state.inputValue).toBe(value);
});
