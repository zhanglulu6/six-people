//参数数据类型的接口
import { PersonParamsType } from "../../interface/index";
import { getpersondataApi } from "../../utils/api";
export default{
  // 获取注册数据，给前端反馈信息
  async getPeractions({commit}: any, payload:PersonParamsType){
    // 这里的payload是前端从后端获取到的数据
    const res = await getpersondataApi(payload);
    // console.log(res);
    // res.list的数据是返回给前端所需要的数据
    commit("getPermutations", res.list);
  }
}