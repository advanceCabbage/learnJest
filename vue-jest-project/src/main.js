import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import TodoList from "./containers/todoList/TodoList.vue";
import NotFoundPage from "./containers/NotFundPage/NotFundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: TodoList,
  },
  {
    path: "/NotFoundPage",
    component: NotFoundPage,
  },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
