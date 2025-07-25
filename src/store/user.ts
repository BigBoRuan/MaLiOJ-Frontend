import { StoreOptions } from "vuex";
import ACCESSE_NUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 从远程请求获取登录信息
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESSE_NUM.NOT_LOGIN,
        });
      }
    },
  },

  mutations: {
    async updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
