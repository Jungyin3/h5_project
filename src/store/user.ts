import { defineStore } from "pinia";

/**
 * useUserStore 获取用户信息
 * username 用户名
 */
const useUserStore = defineStore("user", {
  state: () => ({
    username: "" as string,
  }),
  getters: {},
  actions: {},
});

export default useUserStore;
