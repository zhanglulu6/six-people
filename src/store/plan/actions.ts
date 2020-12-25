import { getHomePlanApi } from "../../utils/api";

export default {
  async getHomePlanApi({ commit }:any) {
    const res = await getHomePlanApi({});
    commit("changePlanList", res.list);
    // console.log(res.list);
  }
};
