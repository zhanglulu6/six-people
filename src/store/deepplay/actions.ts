import { getDeepPlayApi } from "../../utils/api";

export default {
  async getDeepPlayApi({ commit }:any) {
    const res = await getDeepPlayApi({});
    commit("changeDeepPlayList", res.list);
    console.log(res.list);
  }
};
