<template>
  <div class="header">
    <div class="header-content">
      <input
        type="text"
        data-test="input"
        :value="inputValue"
        @keyup.enter="addTodoItem"
        @input="(e) => changeInputValue(e.target.value)"
        placeholder="add todo"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  props: {},
  computed: {
    ...mapState({
      inputValue: (state) => state.inputValue,
    }),
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.changeInputValue("");
      }
    },
    ...mapMutations({ changeInputValue: "changeInputValue" }),
  },
};
</script>

<style scoped lang="stylus">
.header{
  line-height: 60px;
  background-clip: #666;
}
.header-content{
  width 60px;
  height: 60px
}
</style>
