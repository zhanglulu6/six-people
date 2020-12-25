// 封装接口
import http from "./http";
// 毛苏玲接口
// 首页的最受欢迎列表接口
export const getHomeBannerApi = (params: any) => http.get("/home/swiper", params);

// 首页目的地地址接口
export const getHomeAddressApi = (params: any) => http.get("/destina/side", params);

// 首页目的地图片接口
export const getHomeAddressPhotoApi = (params: any) => http.get("/home/area", params);

// 首页策划接口
export const getHomePlanApi = (params: any) => http.get("/home/plan", params);

// 首页旅游灵感的接口
export const getHomeTravelApi = (params: any) => http.get("/home/travel", params);

// 每日推荐页面的接口
export const getReasonApi = (params: any) => http.get("/recom/recommend", params);

// 深度玩法页面的接口
export const getDeepPlayApi = (params: any) => http.get("/home/planmore", params);

// 详情页的接口
export const getDetailApi = (params: any) => http.get("/home/traveldetail", params);

// 蒋粤接口
//post的方式来获取数据登录的数据，但是前端要给后端传入参数进去然后去和后端匹配有没有这个数据，有的话就匹配成功，登录成功，没有就是登录失败
// export const getlogindataApi = params => {
//   return http.post("/login",params);
// }
// 封装接口，引入HTTP
// 参数的数据类型接口
import { LoginParamsType, RegParamsType, CodeParamsType } from "../interface/index";
//post的方式来获取数据登录的数据，但是前端要给后端传入参数进去然后去和后端匹配有没有这个数据，有的话就匹配成功，登录成功，没有就是登录失败
export const getlogindataApi: any = (params:LoginParamsType) =>{
  return http.post("/api/login",params);
}

// 注册的数据请求接口
export const getregdataApi: any = (params:RegParamsType) =>{
  return http.post("/api/checkcode",params);
}

// 获取验证码的接口
export const getcodedataApi: any = (params:CodeParamsType) =>{
  return http.post("/api/getcode",params);
}

// 张璐璐
export const getAreaListApi = (params: any) => http.get("/destina/side",params);

//右侧侧导航
export const getCityListApi = (params: any) => http.get("/destina/destinalist", params);
