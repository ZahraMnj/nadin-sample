<template>
  <a-layout>
    <a-layout-sider
      class="sider-nav"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <router-link to="/">
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/todos">
            <span>Todos</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/weather">
            <span>Weather</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/profile">
            <span>Profile</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="nav-header">
        <h2>App </h2>
      </a-layout-header>
      <a-layout-content class="main-content" :style="{}">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MenuOutlined } from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>

<style scoped>
.sider-nav {
  color: var(--color-primary);
  max-width: 200px !important;
  min-width: 100px !important;
  width: 100px !important;
}
.main-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 580px;
  width: 100%;
}
@media screen and (max-width: 576px) {
  .sider-nav {
    max-width: 100px !important;
  }
  .main-content {
    margin: 14px 6px;
    padding: 14px;
  }
}
@media screen and (max-width: 326px) {
  .main-content {
    margin: 6px 6px;
    padding: 6px;
  }

  }

.nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background: #fff;
  padding-right: 20px;
  padding-left: 5px;
  font-size: 30px;
}

.nav-btn {
  font-size: 2rem;
  color: var(--color-primary);
  background: transparent;
  border: transparent;
  cursor: pointer;
  animation: bounce 2s ease infinite;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
