import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { asyncRouterMap, constantRouterMap } from "@/config/router.config"; 

const routes: Array<RouteRecordRaw> = [
  ...asyncRouterMap,
  ...constantRouterMap
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
