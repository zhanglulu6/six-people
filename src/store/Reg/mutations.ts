// 注册
export default {
  // 改变的事件
  getRegmutations(state:any,payload:any){
    //从actions得到的数据是payload 
    state.Regdata = payload;
  }
}