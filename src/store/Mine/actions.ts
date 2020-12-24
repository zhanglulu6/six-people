// 获取接口数据的接口文档
import { getlogindataApi } from "../../utils/api";
import { LoginParamsType } from "../../interface/index";
export default {
  // 获取数据
  async getLoginactions({commit}: any, payload:LoginParamsType){
    const res = await getlogindataApi(payload);
      commit("getLoginmutations", res.msg);
  }
}