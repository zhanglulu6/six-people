import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const plan = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default plan;
