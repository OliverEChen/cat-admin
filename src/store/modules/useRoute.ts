import { defineStore } from "pinia";
import { asyncRouterMap } from "@/config/router.config";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const recursionFn = (item:any) => {
  if(item.children){
    item.key = item.name
    item.children.forEach((child:any) => {
      child.key = child.name
      item = recursionFn(child)
    })
  }else {
    item.key = item.name
  }
  return item
}
export const useRoute = defineStore("useRoute", {
  // other options...
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      route: asyncRouterMap,
      count: 1
    };
  },
  getters: {
    routeForMenu: (state) => {
      state.route[0].children.forEach((item: any) => {
        recursionFn(item)
      })
      return state.route[0].children || [];
    },
    counter: (state) => {
      return state.count * 2
    }
  },
});
