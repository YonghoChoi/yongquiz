import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import QuestionPage from "../views/QuestionPage.vue";
import ResultPage from "../views/ResultPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    name: "question",
    path: "/question",
    component: QuestionPage,
  },
  {
    name: "result",
    path: "/result",
    component: ResultPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
