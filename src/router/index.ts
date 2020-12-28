// 适配的路由
import { createRouter, createWebHashHistory } from "vue-router";
// import component from '../shims-vue';

const routes = [
  //重定向到home，不管怎么跳转都到home
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../components/Home.vue"),
    children: [
      {
        path: "/home",
        redirect: "/index"
      },
      // 首页
      {
        path: "/index",
        component: () => import("../components/Index.vue")
      },
      // 目的地页
      {
        path: "/address",
        component: () => import("../components/Address.vue")
      },
      // 每日推荐页
      {
        path: "/reason",
        component: () => import("../components/Reason.vue")
      },
      // 我的页
      {
        path: "/mine",
        component: () => import("../components/Mine.vue")
      }
    ]
  },
  // 旅游灵感详情页
  {
    path:"/traveldetail/:id",
    component: () => import("../components/TravelDetail.vue"),
    props: true
  },
  {
    path: "/addressdetail",
    component: () => import("../components/AddressDetail.vue")
  },
  // 注册页面
  {
    path: "/reg",
    component: () => import("../components/Reg.vue")
    
  },
  //这个是点击登录的时候跳转的页面，但是底下还是有底部导航的，所以是二级路由
  {
    path: "/person",
    component: () => import("../components/Person.vue")
  },
  //提交需求页
  {
    path: "/demand",
    component: () => import("../components/Demand.vue")
  },
  // 完善需求页
  {
    path: "/journey",
    component: () => import("../components/Journey.vue")
  },
  //景点详情页
  {
    path: "/info",
    component: () => import("../components/Info.vue")
  },
  // 定制中的行程
  {
    path: "/precious",
    component: () => import("../components/Precious.vue")
  },
  //我的旅游基金
  {
    path: "/travelFund/:value",
    component: () => import("../components/TravelFund.vue"),
    props:true
  },
  // 选择目的地页
  {
    path: "/chooseaddress",
    component: () => import("../components/ChooseAddress.vue")
  },
  // 深度玩法页
  {
    path: "/deepplay",
    component: () => import("../components/DeepPlay.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition):any {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

// 这个是最终导出的路由
export default router;
