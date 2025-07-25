import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import ACCESSE_NUM from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },

  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    // meta: {
    //   access: ACCESSE_NUM.ADMIN,
    // },
  },
  {
    path: "/update/question",
    name: "更新题目题目",
    component: AddQuestionView,
    // meta: {
    //   access: ACCESSE_NUM.ADMIN,
    // },
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    // meta: {
    //   access: ACCESSE_NUM.ADMIN,
    // },
  },

  {
    path: "/hide",
    name: "隐藏页面",
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },

  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
  },

  {
    path: "/admin",
    name: "管理员可见",
    component: AdminView,
    meta: {
      access: ACCESSE_NUM.ADMIN,
    },
  },
  {
    path: "/about",
    name: "关于自己",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
