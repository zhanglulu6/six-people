import { getDeepPlayApi } from "../../utils/api";

export default {
  async getDeepPlayApi({ commit }:any) {
    const res = await getDeepPlayApi({});
    console.log(res);
    commit("changeDeepPlayList", res.list);
    // console.log(res.list);
  }
};
