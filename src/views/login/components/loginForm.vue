<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username" placeholder="cat" />
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password" placeholder="admin" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" name="loginForm">
import { defineComponent, reactive } from 'vue'
import { notification } from 'ant-design-vue'
import { useUser } from '@/store/modules/useUser'
import router from '@/router/index'
interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  setup() {
    const store = useUser()
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    })
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description: '登录失败，请检查账号或密码是否正确！',
        duration: 4
      })
    }
    const onFinish = (values: any) => {
      console.log('matchUser', store.matchUser(values))
      if (store.matchUser(values)) {
        console.log('Success:', values)
        window.localStorage.setItem('isLogin', store.matchUser(values).toString())
        router.replace('/')
      } else {
        openNotification()
      }
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    return {
      formState,
      onFinish,
      onFinishFailed
    }
  }
})
</script>
