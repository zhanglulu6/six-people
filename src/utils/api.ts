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


// 蒋粤接口
//post的方式来获取数据登录的数据，但是前端要给后端传入参数进去然后去和后端匹配有没有这个数据，有的话就匹配成功，登录成功，没有就是登录失败
// export const getlogindataApi = params => {
//   return http.post("/login",params);
// }
