import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const address = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default address;
