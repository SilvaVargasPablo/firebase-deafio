import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import CRUD from "../views/CRUD.vue";

import { observador } from "../firebase/auth.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/about",
    component: About,
    beforeEnter: (to, from, next) => {
      let allow = false;
      if (allow) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "/crud",
    component: CRUD
  },
  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  observador(to, next);
});

export default router;
