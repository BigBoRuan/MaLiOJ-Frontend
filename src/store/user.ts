import { StoreOptions } from "vuex";
import ACCESSE_NUM from "@/access/accessEnum";

export default {
  namespaced: true,
  state: {
    loginUser: {
      username: "未登录",
      userRole: ACCESSE_NUM.NOT_LOGIN,
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO 从远程获取登录信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
