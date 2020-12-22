import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import "amfe-flexible";
import 'vant/lib/index.css';
import "./assets/css/style.stylus";
import router from "./router/index";
import {store,key} from "./store/index";
import { Field, Icon, Button } from 'vant';


createApp(App)
  .use(router)
  .use(store,key)
  .use(Field)
  .use(Icon)
  .use(Button)
  .mount('#app')
