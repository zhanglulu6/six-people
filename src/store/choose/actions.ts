export default {
  changeCity({ commit }: any, payload: any): any {
    console.log(payload);
    commit("changeCity", payload);
  }
}