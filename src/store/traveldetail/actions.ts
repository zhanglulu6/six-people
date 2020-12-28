import { getTravelDetailApi } from "../../utils/api";

export default {
  async getTravelDetailApi({ commit }:any, payload:any) {
    const res = await getTravelDetailApi({
      id: payload.id
    });
    commit("changeTravelDetailList", res.list);
    // console.log(res);
  }
};
