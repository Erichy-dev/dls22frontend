import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";

import App from "./App.vue";
import router from "./router";
import { VueReCaptcha } from "vue-recaptcha-v3";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTwitter,
  faWhatsapp,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faTwitter,
  faWhatsapp,
  faEnvelope,
  faFacebook,
  faGithub,
  faMoneyBill1Wave
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueReCaptcha, {
  siteKey: "6LduzTgiAAAAAPHjMOpL2ngMZtR29pWSeQDwSXnO",
  loaderOptions: {
    autoHideBadge: true,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
