import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "amfe-flexible"
import 'vant/lib/index.css'
import "./assets/css/style.stylus" 
import 'default-passive-events'
import router from "./router/index"
import { store, key } from "./store/index"
import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, NavBar, Calendar, Cell, CellGroup, ActionSheet, DatetimePicker, Picker } from 'vant'

createApp(App)
  .use(router)
  .use(store, key)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Button)
  .use(NavBar)
  .use(Calendar)
  .use(Cell)
  .use(CellGroup)
  .use(ActionSheet)
  .use(DatetimePicker)
  .use(Picker)
  .mount('#app')
