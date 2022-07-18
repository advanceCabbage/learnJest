<template>
  <div class="undoList">
    <div class="title">
      正在进行
      <span data-test="count" class="count"> {{ list.length }}</span>
    </div>
    <ul class="list">
      <li v-for="item in list" :key="item.value" data-test="item">
        {{ item.value }}

        <span
          data-test="delete-button"
          @click="
            () => {
              handleDelte(indx);
            }
          "
          class="delete"
          >-</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UndoList",
  props: {
    list: {
      default: () => [],
      type: Array,
    },
  },
  methods: {
    handleDelte(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<style scoped lang="stylus">
.undoList{
  width: 600px;
  margin: 0 0;
}

.title{
  line-height: 30px;
  font-size:14px;
  font-weight: bold;
  margin: 10px 0px;
}
.count{
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-aglin:center;
  background: #666;
  border-radius: 10px;
  margin-top: 10px;
  color: #000;
  font-size: 12px;
}
</style>
