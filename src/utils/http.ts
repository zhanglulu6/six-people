import * as qs from "qs";
// import axios from "axios";
// import NProgress from "nprogress";//这是进度条的功能可以不用已经注销掉了
import { Toast } from "vant";
// 封装请求
const prefix = "http://42.192.151.14:3000";
const http: any = {
  get(url:string, params:any) {
    // console.log(params);
    if (params) {
      // params: {a: 1, b: 2}
      // 目标 url?a=1&b=2
      let arr = Object.keys(params); // [a, b]
      url += "?";
      arr = arr.map(item => {
        return item + "=" + params[item];
      }); // ['a=1', 'b=2']
      url += arr.join("&");
    }
    return fetch(prefix + url)
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  },
  post(url: string, params: any) {
    // NProgress.start();
    // params ? params : {};
    // params = {
    //   ...params,
    //   cityId: this.$store.state.city.cityId
    // };
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(params)
    })
      .then(response => {
        // NProgress.done();
        return response.json();
      })
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  }


  
  // post(url:string, params:any) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(url, params)
  //       .then(res => {
  //         if (res.status === "0") {
  //           resolve(res);
  //         } else {
  //           // Toast(res.msg);
  //         }
  //       })
  //       .catch(err => {
  //         // Toast(err.message);
  //         reject(err);
  //       });
  //   });
  // }
};

export default http;
