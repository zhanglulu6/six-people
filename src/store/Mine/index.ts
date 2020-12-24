import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const MineModule = {
  // 各个option组成的模块，然后导出
  namespaced: true,
  state,
  mutations,
  actions
}
// 导出登录模块
export default MineModule;