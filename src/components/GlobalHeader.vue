<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <div>
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/oj-logo.jpg" />
              <div class="title">码粒在线OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.username ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routers";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
// 默认是主页
const selectedKeys = ref(["/"]);
const store = useStore();

// 路由跳转 更新选择的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     username: "Ruan",
//     role: "admin",
//   });
// }, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  color: #444;
  margin-left: 16px;
}
.logo {
  height: 48px;
}
</style>
