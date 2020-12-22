// 适配的路由
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../Home.vue"),
    children:[
      {
        path:"/login",
        component: () => import("../Login.vue"),
        // beforeEnter: (to, from, next) => {
        //     if (!localStorage.getItem("token")) {
        //       next("/mine");
        //     } else {
        //       next();
        //     }
        //   }
        
        // children:[
        //   {
        //     path:"/mine",
        //     component: () => import("../Mine.vue"),
        //   }
        // ]
      }
    ]
    // 路由守卫
    // beforeEnter: (to, from, next) => {
    //   if (!localStorage.getItem("token")) {
    //     next("/mine");
    //   } else {
    //     next();
    //   }
    // }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
