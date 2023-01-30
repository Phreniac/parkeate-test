import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown, faSquareFacebook, faTwitter, faInstagram);
import "./assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
