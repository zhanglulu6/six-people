// 封装接口
import http from "./http";

// 毛苏玲接口
// 首页的最受欢迎列表接口
export const getHomeBannerApi = (params: any) => http.get("/home/swiper", params);

// 首页的电影列表
// export const getMovieListApi = params => http.get("/movies/list", params);

// 首页加载更多
// export const getMovieListMoreApi = params => http.post("/movies/more", params);

// 详情页数据
// export const getMovieDetailApi = params => http.post("/movies/detail", params);

// 城市选择列表
// export const getCitiesListApi = params => http.get("/area/list", params);

// 蒋粤接口
//post的方式来获取数据登录的数据，但是前端要给后端传入参数进去然后去和后端匹配有没有这个数据，有的话就匹配成功，登录成功，没有就是登录失败
// export const getlogindataApi = params => {
//   return http.post("/login",params);
// }
