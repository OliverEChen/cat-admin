import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from "vite-plugin-eslint";
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      "vue": "vue/dist/vue.esm-bundler.js"
    }
  },
  define: {
    'process.env': {}
  },
  // server config
  server: {
    host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    port: 80,
    open: true,
    cors: true,
    // https: false,
    // 代理跨域（mock 不需要配置，这里只是个事列）
    proxy: {
      "/api": {
        // target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
})
