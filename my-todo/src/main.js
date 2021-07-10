import { createApp } from "vue";
import App from "./App.vue";
import Application from "./Application.vue";
import RouteWithParam from "./components/RouteWithParam.vue";
import RouteParamsAsProps from "./components/RouteParamsAsProps.vue";
import RouterApp from "./RouterApp.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
// import "./index.css";
import "./assets/tailwind.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "root" },
    { path: "/root", component: RouterApp },
    { path: "/app", component: Application },
    {
      path: "/app/:id",
      component: RouteWithParam,
      // route guard
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      },
    },
    { path: "/app/props/:propsId", component: RouteParamsAsProps, props: true },
    /* 
    // nested routes
    {
      path: "/app",
      component: Application,
      children: [
        { path: ":id", component: RouteWithParam },
        { path: "props/:propsId", component: RouteParamsAsProps, props: true },
      ],
    }, */

    { path: "/:notFound(.*)", component: ErrorComponent },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
  },
});

// route guard
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next(true); // next(false) //next ({})
});
// this will run after navigation conform
router.afterEach((to, from) => {
  console.log(to, from);
});
const app = createApp(App);
app.use(router);
app.mount("#app");

// createApp(App).mount("#app");
