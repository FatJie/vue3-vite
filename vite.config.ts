import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false, // 禁用eslint缓存
      fix: true // 代码保存时执行 eslint 校验
    })
  ]
})
