<template>
  <div id="BasicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
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
#BasicLayout {
}

.header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

.content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

.footer {
  background: #efefef;
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
