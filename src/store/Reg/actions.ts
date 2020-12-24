import { getregdataApi } from '../../utils/api';
import { RegParamsType } from "../../interface/index";
export default {
  // 获取注册数据，给前端反馈信息
  async getRegactions({commit}: any, payload:RegParamsType){
    // 这里的payload是前端从后端获取到的数据
    const res = await getregdataApi(payload);
    console.log(res);
    commit("getRegmutations", res.msg);
  }
}