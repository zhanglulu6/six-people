import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const travel = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default travel;
