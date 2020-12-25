// 蒋粤
// 定义数据类型的接口
// 登录给后端传参数的参数的数据类型的接口定义
export interface LoginParamsType{
  username:string,
  phone:number
}
// 注册给后端传参数的参数的数据类型的接口定义
export interface RegParamsType{
  username:string,
  phone:number,
  email:string,
  address:string,
  code:string 
}

// 获取验证码的数据类型的接口定义
export interface CodeParamsType{
  code:string
}
//跳转个人中心时传递的参数的数据类型的接口
export interface PersonParamsType{
  email:string,
  phone:number
}
// 个人中心获取到的数据的参数数据类型接口
export interface PersonlistParamsType{
  email:string,
  phone:number,
  address:string,
  username:string,
  id:number
}
// 毛苏玲
export interface DemandType{
  value: string,
  showsecond: boolean
}