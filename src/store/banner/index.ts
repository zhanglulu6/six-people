import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const banner = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default banner;
