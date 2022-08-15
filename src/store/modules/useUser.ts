import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
interface User {
  username: string
  password: string
}
export const useUser = defineStore('user', {
  // other options...
  state: () => {
    return {
      user: {
        username: 'cat',
        password: 'admin'
      }
    }
  },
  getters: {
    matchUser: (state) => {
      return (vals: User) => {
        if (vals.username == state.user.username && vals.password == state.user.password) {
          return true
        } else {
          return false
        }
      }
    }
  }
})
