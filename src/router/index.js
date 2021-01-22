import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      component: MainPage,
      children: [
        // {
        //   name: "start",
        //   path: "/start",
        //   component: StartPage,
        // },
        
      ],
    },
  ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  export default router;
