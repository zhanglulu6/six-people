import { getReasonApi } from "../../utils/api";

export default {
  async getReasonApi({ commit }:any) {
    const res = await getReasonApi({});
    commit("changeReasonList", res.list);
    // console.log(res.list);
  }
};
