import { getHomeAddressApi } from "../../utils/api";

export default {
  async getHomeAddressApi({ commit }:any) {
    const res = await getHomeAddressApi({});
    commit("changeAddressList", res.title.slice(0,8));
    // console.log(res.title.slice(0,8));
  }
};
