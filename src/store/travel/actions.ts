import { getHomeTravelApi } from "../../utils/api";

export default {
  async getHomeTravelApi({ commit }:any) {
    const res = await getHomeTravelApi({});
    commit("changeTravelList", res.list);
    // console.log(res.list);
  }
};
