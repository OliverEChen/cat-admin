import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { createPinia } from 'pinia'


createApp(App).use(router).use(createPinia()).use(Antd).mount("#app");
