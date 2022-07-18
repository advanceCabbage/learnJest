<template>
  <div>
    <h1>TODOList</h1>
    <Header @add="addUndoItem" />
    <!-- <ul>
      <li v-for="item in undoList" :key="item">{{ item }}</li>
    </ul> -->
    <UndoList :list="undoList" @delete="handleItemDelete" />
  </div>
</template>

<script>
import Header from "./components/Header";
import UndoList from "./components/UndoList";
import axios from "axios";
export default {
  name: "TodoList",
  props: {},
  components: {
    Header,
    UndoList,
  },
  data() {
    return {
      undoList: [],
    };
  },
  mounted() {
    // axios
    //   .get("/getUndoList.json")
    //   .then((res) => {
    //     this.undoList = res.data;
    //   })
    //   .catch((e) => {});
  },
  methods: {
    addUndoItem(itemName) {
      this.undoList.push({
        status: "div",
        value: itemName,
      });
    },
    handleItemDelete(index) {
      this.undoList.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="stylus"></style>
