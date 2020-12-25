import { getHomeAddressPhotoApi } from "../../utils/api";

export default {
  async getHomeAddressPhotoApi({ commit }:any) {
    const res = await getHomeAddressPhotoApi({});
    commit("changeAddressPhotoList", res.list);
    // console.log(res.list);
  }
};
