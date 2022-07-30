<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Logo :collapsed="collapsed"></Logo>
      <CMenu></CMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <CHeader :collapsedFn="collapsedFn" :collapsed="collapsed"></CHeader>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import CMenu from '@/components/menu/CMenu.vue'
import Logo from './Logo.vue'
import CHeader from './CHeader.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    CMenu,
    Logo,
    CHeader
  },

  setup () {
    const collapsed = ref<boolean>(false)
    const collapsedFn = () => {
      collapsed.value = !collapsed.value
    }
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed,
      collapsedFn
    }
  }
})
</script>
<style>
.ant-layout {
  height: 100%;
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
