<template>
  <div>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark" :inline-collapsed="collapsed">
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key" @click="navTo(item.path)">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.key" :menu-info="item" :navTo="navTo" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PieChartOutlined, MailOutlined } from '@ant-design/icons-vue'
import router from '@/router/index'
import { useRoute } from '@/store/modules/useRoute'

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    },
    navTo: {
      type: Function,
      default: null
    }
  },
  template: `
    <a-sub-menu :key="menuInfo.key">
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuInfo.meta.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key" @click="navTo(item.path)">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" :navTo="navTo"/>
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined
  }
}
export default defineComponent({
  components: {
    'sub-menu': SubMenu,
    PieChartOutlined
  },
  setup() {
    const list = useRoute().routeForMenu

    const collapsed = ref<boolean>(false)

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }
    const navTo = (path: string) => {
      router.push(path)
    }
    return {
      list,
      collapsed,
      toggleCollapsed,
      navTo,
      selectedKeys: ref(['1']),
      openKeys: ref(['2'])
    }
  }
})
</script>
