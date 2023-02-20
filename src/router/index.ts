import type { Router, RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

/** 路由配置 */
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/pages/index/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    children: [
      {
        path: "/user/login",
        name: "Login",
        component: () => import("@/pages/user/login.vue"),
      },
    ],
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/404.vue"),
  },
];

// 路由实例
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
