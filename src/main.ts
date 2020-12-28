import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "amfe-flexible"
import 'vant/lib/index.css'
import "./assets/css/style.stylus" 
import "./assets/fontbingo/iconfont"
import 'default-passive-events'
import router from "./router/index"
import { store, key } from "./store/index"
<<<<<<< HEAD
import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, NavBar, Calendar, Cell, CellGroup, ActionSheet, DatetimePicker, Picker, Field, Icon, Lazyload, Empty, TreeSelect, Form ,CountDown, Loading, Sidebar, SidebarItem, NumberKeyboard, Sticky} from 'vant'
=======
import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, NavBar, Calendar, Cell, CellGroup, ActionSheet, DatetimePicker, Picker, Field, Icon, Lazyload, Empty, TreeSelect, Form ,CountDown,NumberKeyboard,Checkbox, CheckboxGroup,Tab, Tabs  } from 'vant'
>>>>>>> jiangyue

// Dialog({ message: '提示' });
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
  .use(Icon)
  .use(Field)
  .use(Lazyload as any, {
    lazyComponent: true
  })
  .use(Empty)
  .use(TreeSelect)
  .use(Form)
  .use(CountDown)
  .use(Loading)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Sticky)
  .use(NumberKeyboard)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Tab)
  .use(Tabs)
  .mount('#app')
