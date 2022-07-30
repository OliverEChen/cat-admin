<template>
  <div style="display: flex; justify-content: space-between">
    <div style="text-align: left; margin-left: 10px;">
      <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="collapsedFn"
      />
      <menu-fold-outlined
          v-else
          class="trigger"
          @click="collapsedFn"
      />
    </div>
    <a-popconfirm
        title="确定退出系统?"
        ok-text="是的"
        cancel-text="取消"
        @confirm="logout"
        @cancel="cancel"
    >
      <a href="#" style="margin-right: 10px">退出</a>
    </a-popconfirm>
  </div>
</template>

<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  props: ['collapsedFn', 'collapsed'],
  setup () {
    const logout = () => {
      window.localStorage.removeItem('isLogin')
      window.location.reload()
    }
    const cancel = (e: MouseEvent) => {
      console.log(e)
      message.error('Click on No')
    }
    return {
      logout,
      cancel
    }
  }
})
</script>

<style scoped>

</style>
