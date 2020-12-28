import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const deepplay = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default deepplay;
