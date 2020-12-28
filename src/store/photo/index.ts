import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const photo = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default photo;
