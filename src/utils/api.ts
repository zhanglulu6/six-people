// 封装接口，引入HTTP
import http from "./http";
// 参数的数据类型接口
import { LoginParamsType,RegParamsType,CodeParamsType } from "../interface/index";
//post的方式来获取数据登录的数据，但是前端要给后端传入参数进去然后去和后端匹配有没有这个数据，有的话就匹配成功，登录成功，没有就是登录失败
export const getlogindataApi: any = (params:LoginParamsType) =>{
  return http.post("/login",params);
}


// 注册的数据请求接口
export const getregdataApi: any = (params:RegParamsType) =>{
  return http.post("/checkcode",params);
}


// 获取验证码的接口
export const getcodedataApi: any = (params:CodeParamsType) =>{
  return http.post("/getcode",params);
}