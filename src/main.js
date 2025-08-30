// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// mitt (emitter) setup
import mitt from "mitt";
const Emitter = mitt();

// pinia config
import { createPinia } from "pinia";

// Vuetify config
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives"; // ✅ تأكد من هذا السطر
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

// swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// إنشاء التطبيق
const app = createApp(App);

// **مهم**: نستخدم provide داخل مكون root، لذلك ننشئ مكون وسيط لتوفير emitter
// app.mixin({
//   setup() {
//     provide("emitter", emitter);
//   },
// });

// استخدام الإضافات
app.use(createPinia());
app.use(vuetify);
app.use(router);

app.provide("Emitter", Emitter);

// تركيب التطبيق على #app
app.mount("#app");
