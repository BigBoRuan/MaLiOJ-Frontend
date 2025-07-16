import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {
      username: "未登录",
      role: "notLogin",
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO 从远程获取登录信息
      // commit("updateUser", { username: "rrr" });
    },
  },
} as StoreOptions<any>;
