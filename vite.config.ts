import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // 别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Proxy代理
  server: {
    // https: true,
    host: true, // 监听所有地址
    // 设置代理
    proxy: {
      "/api": {
        target: "http://10.36.11.224:8186/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
