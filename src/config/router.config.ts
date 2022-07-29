// eslint-disable-next-line
import BasicLayout from '@/layout/Index.vue'

export const asyncRouterMap: any = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/index",
    children: [
      // 首页
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: '首页'
        }
      },
      // 关于
      {
        path: "/about",
        name: "about",
        meta: {
          title: '关于'
        },
        redirect: "/about",
        children: [
          {
            path: '/about',
            name: "about",
            component: () => import("@/views/AboutView.vue"),
            meta: {
              title: '关于'
            },
          },
        ],
      },
    ],
  },
];

export const constantRouterMap: any = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
];
