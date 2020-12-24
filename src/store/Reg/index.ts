import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

// 注册模块
const RegModule = {
  // 命名空间，防止声明有重复
  namespaced: true,
  state,
  mutations,
  actions
}
// 导出注册模块
export default RegModule;