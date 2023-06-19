import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 환경설정 - 소스들의 경로를 지정 / github 에서 assets 경로를 찾아줌
  base: "./",

})

