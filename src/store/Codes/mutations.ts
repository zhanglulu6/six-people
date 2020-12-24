export default {
   // 改变的事件
   getCodemutations(state:any,payload:any){
    //从actions得到的数据是payload 
    state.Codedata = payload;
  }
}