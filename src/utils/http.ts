//接口请求的封装
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
// qs.parse()是将URL解析成对象的形式
// qs.stringify()是将对象 序列化成URL的形式，以&进行拼接
import * as qs from "qs";
//7.接口地址前缀写成变量好修改
const prefix = "http://10.31.162.61:8888/api";
const http = {
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
