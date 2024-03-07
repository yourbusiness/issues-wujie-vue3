import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  // 注意 注意 注意 这里加入commonjs配置后，打包预览会报错
  plugins: [vue(), commonjs()]
})
