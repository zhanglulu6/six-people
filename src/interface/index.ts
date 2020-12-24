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
