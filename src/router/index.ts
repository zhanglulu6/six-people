// 适配的路由
import { createRouter, createWebHashHistory } from "vue-router";

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
  // 详情页
  {
    path:"/detail/:id",
    component: () => import("../components/Detail.vue"),
    props: true
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
  // 定制中的行程
  {
    path: "/precious",
    component: () => import("../components/Precious.vue")
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
  routes
});

// 这个是最终导出的路由
export default router;
