// 登录参数的数据类型接口
// import { LoginParamsType } from "../../interface/index";
export default{
  // 改变的事件
  getLoginmutations(state:any,payload:any){
    //从actions得到的数据是payload 
    state.Logindata = payload;
  }
}