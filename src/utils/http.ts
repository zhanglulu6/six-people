import * as qs from "qs";
// import NProgress from "nprogress";//这是进度条的功能可以不用已经注销掉了

// 封装请求
const prefix = "http://10.31.162.61:8888";
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
};

export default http;
