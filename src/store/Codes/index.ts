import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
const CodeModule = {
   // 各个option组成的模块，然后导出
   namespaced: true,//命名空间
   state,
   mutations,
   actions
}
// 导出模块
export default CodeModule;