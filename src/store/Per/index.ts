import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

// 个人中心的模块
const PerModule = {
  namespaced: true,
  state,
  mutations,
  actions
}
// 导出模块
export default PerModule;