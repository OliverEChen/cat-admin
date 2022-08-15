import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { log } from 'util'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  define: {
    'process.env': {}
  },
  // server config
  server: {
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    port: 9080,
    open: true,
    cors: true,
    // https: false,
    proxy: {
      '/api': {
        target: 'http://192.168.18.146:9080', //
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
