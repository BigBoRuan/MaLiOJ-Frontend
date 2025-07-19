<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <img src="@/assets/oj-logo.jpg" class="logo" />
        <div>码粒在线OJ</div>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/BigBoRuan" target="_blank">
          码粒OJ在线 By BigBoRuan
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
}
#userLayout .logo {
  width: 64px;
  height: 64px;
}
#userLayout {
}

.header {
  margin-top: 16px;
  margin-bottom: 16px;
}

.content {
  margin-bottom: 16px;
  padding: 20px;
}

.footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
