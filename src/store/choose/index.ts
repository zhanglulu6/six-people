import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const choose = {
  namespaced:true,
  state,
  mutations,
  actions
};

export default choose;
