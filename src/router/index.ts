import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
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
      {
        path: "/index",
        component: () => import("../components/Index.vue")
      },
      {
        path: "/address",
        component: () => import("../components/Address.vue")
      },
      {
        path: "/reason",
        component: () => import("../components/Reason.vue")
      },
      {
        path: "/mine",
        component: () => import("../components/Mine.vue")
      }
    ]
  },
  {
    path: "/demand",
    component: () => import("../components/Demand.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;