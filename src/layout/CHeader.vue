<template>
  <div style="display: flex; justify-content: space-between">
    <div style="text-align: left; margin-left: 10px">
      <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedFn" />
      <menu-fold-outlined v-else class="trigger" @click="collapsedFn" />
    </div>
    <a @click="showModal" style="margin-right: 10px">退出</a>
    <a-modal v-model:visible="visible" title="温馨提示">
      <div style="text-align: center; font-size: 18px">您确定退出系统吗？</div>
      <template #footer>
        <div style="text-align: center">
          <a-button key="back" @click="cancel">取消</a-button>
          <a-button key="submit" type="primary" @click="handleOk">确定</a-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  props: ['collapsedFn', 'collapsed'],
  setup() {
    const logout = () => {
      window.localStorage.removeItem('isLogin')
      window.location.reload()
    }
    const cancel = (e: MouseEvent) => {
      console.log(e)
      visible.value = false
      message.error('Click on cancel')
    }
    const visible = ref<boolean>(false)
    const showModal = () => {
      visible.value = true
    }

    const handleOk = (e: MouseEvent) => {
      console.log(e)
      visible.value = false
      logout()
    }
    return {
      visible,
      showModal,
      handleOk,
      cancel
    }
  }
})
</script>

<style scoped></style>
