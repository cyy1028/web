import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/index",
    },

    // 菜单页面
    {
      path: "/Home",
      name: "/Home",
      component: () => import("./components/Home.vue"),
      children: [
        // 首页
        {
          path: "/index",
          name: "首页",
          component: () => import("./components/Index.vue"),
        },
       
      ],
    },
    // 登录页
    {
      path: "/Login",
      name: "/Login",
      component: () => import("./components/Login.vue"),
    },
  
  ],
});

// 以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
