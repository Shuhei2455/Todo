import Vue from "vue";
import VueRouter from "vue-router";
import Task from "../components/Task.vue";
import Test from "../views/Test.vue";
import Test1 from "../views/Test1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/task",
    name: "task",
    component: Task,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/test1",
    name: "test1",
    component: Test1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

export default router;