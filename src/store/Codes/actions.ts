// import { RegParamsType } from "../../interface
import { getcodedataApi } from "../../utils/api";
export default{
  // 获取数据
  async getCodeactions({commit}: any, payload:string){
    const res = await getcodedataApi(payload);
    // 接收到返回的信息
    console.log(res);
    commit("getCodemutations", res.msg);
  }
}