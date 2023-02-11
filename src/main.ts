import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCloudArrowDown,
  faPaperPlane,
  faXmark,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/main.css";

library.add(faXmark, faCloudArrowDown, faPaperPlane, faCircleXmark);

const app = createApp(App);

app.use(createPinia());

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
