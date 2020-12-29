import { getAskListApi } from "../../utils/api";

export default {
  async getAskListApi({ commit }:any, payload:any) {
    const res = await getAskListApi({
      id: payload.id
    });
    commit("changeAskList", res);
    // console.log(res);
  }
};
