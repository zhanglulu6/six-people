//接口请求的封装
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
// qs.parse()是将URL解析成对象的形式
// qs.stringify()是将对象 序列化成URL的形式，以&进行拼接
import qs from "qs";
//7.接口地址前缀写成变量好修改
const prefix = "http://10.31.162.61:8888/api";
const http = {
  get(url:string, params:any) {
    if (params) {
      // params: {a: 1, b: 2}
      //1.params是拼接在地址？后面的参数（queryString）,如果参数存在的话，就将参数转成数组用Object.keys(params)
      let arr = Object.keys(params);
      // 2.地址的处理将传进的地址后面加上？
      url += "?";
      //3.参数转成数组进行遍历用map
      arr = arr.map(item => {
        //返回的是 a     =      params[a]
        //        a     =      a的具体值
        return item + "=" + params[item];
      });
      //4.将地址和最后得到的参数变换的结果拼接在一起,参数变化过后的数组用&符号转换成字符串和地址进行拼接
      url += arr.join("&");
    }
    //5.最后的返回结果---用fetch来获得请求
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
  post(url:string, params:any) {
    // NProgress.start();
    //传进来的params就不需要写cityId了
    //对象的组合
    //提前做判断
    // params ? params : {};
    // params = {
    //   ...params,
    //   //达不到要求给对象里面添加一项
    //   cityId: this.$store.state.init.cityId
    // };
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 将对象（取到的params形式） 序列化成URL的形式，以&进行拼接
      body: qs.stringify(params)
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  }
};

//6.将封装函数的模块暴露出去
export default http;
