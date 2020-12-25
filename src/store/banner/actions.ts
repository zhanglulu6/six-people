import { getHomeBannerApi } from "../../utils/api";

export default {
  async getBannerListApi({ commit }:any) {
    const res = await getHomeBannerApi({});
    commit("changeBannerList", res.list);
    // console.log(res.list);
  }
};
