import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "amfe-flexible"
import 'vant/lib/index.css'
import "./assets/css/style.stylus" 
import 'default-passive-events'
import router from "./router/index"
import { store, key } from "./store/index"
<<<<<<< HEAD
import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, NavBar, Calendar, Cell, CellGroup, ActionSheet, DatetimePicker, Picker, Field, Icon } from 'vant'
=======
import { Tabbar, TabbarItem, Swipe, SwipeItem, Field, Icon,Cell, CellGroup, Button, NavBar,Form ,CountDown } from 'vant'
>>>>>>> jiangyue

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
<<<<<<< HEAD
  .use(CellGroup)
  .use(ActionSheet)
  .use(DatetimePicker)
  .use(Picker)
  .use(Icon)
  .use(Field)
=======
  .use(Form)
  .use(CountDown)
>>>>>>> jiangyue
  .mount('#app')
