import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/access";

// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

const pinia = createPinia();
createApp(App)
  .use(ArcoVue)
  .use(pinia)
  .use(router)
  .use(ArcoVueIcon)
  .mount("#app");
