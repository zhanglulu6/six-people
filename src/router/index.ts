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
      },
      //这个是点击登录的时候跳转的页面，但是底下还是有底部导航的，所以是二级路由
      {
        path: "/person",
        component: () => import("../components/Person.vue")
      }
    ]
  },
  //提交需求页
  {
    path: "/demand",
    component: () => import("../components/Demand.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 这个是最终导出的路由
export default router;
