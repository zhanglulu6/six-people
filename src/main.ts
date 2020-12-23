// import { createApp } from 'vue';
// import App from './App.vue';
// import './index.css';
// import "amfe-flexible";
// import 'vant/lib/index.css';
// import "./assets/css/style.stylus";
// import router from "./router/index";
// import {store,key} from "./store/index";
// import { Field, Icon, Button } from 'vant';


// createApp(App)
//   .use(router)
//   .use(store,key)
//   .use(Field)
//   .use(Icon)
//   .use(Button)



import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "amfe-flexible"
import 'vant/lib/index.css'
import "./assets/css/style.stylus" 
import router from "./router/index"
import { store, key } from "./store/index"
import { Tabbar, TabbarItem, Swipe, SwipeItem, Field, Icon,Cell, CellGroup, Button, NavBar } from 'vant'

createApp(App)
  .use(router)
  .use(store, key)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Field)
  .use(CellGroup)
  .use(Icon)
  .use(Button)
  .use(NavBar)
  .use(Cell)
  .mount('#app')
