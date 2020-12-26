import { getDetailApi } from "../../utils/api";

export default {
  async getDetailApi({ commit }:any, payload:any) {
    const res = await getDetailApi({
      id: payload.id
    });
    commit("changeDetailList", res.list);
    console.log(res);
  }
};
