// 毛苏玲
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import banner from "../store/banner"
import address from "../store/address"
import photo from "../store/photo"
import plan from "../store/plan"
import travel from "../store/travel"
import reason from "../store/reason"
import choose from "../store/choose"
import deepplay from "../store/deepplay"
import detail from "../store/detail"

// 蒋粤
import mine from '../store/mine';
import reg from "../store/reg";
import codes from "../store/codes";
import per from "../store/Per";
// 这里飘红线是因为版本问题
// import banner from "./banner/index"

// define your typings for the store state
export interface State {
  // count: number
}

// define injection key
export const key: InjectionKey<Store<any>> = Symbol()

export const store = createStore<any>({
  modules: {
    // 毛苏玲
    banner,
    address,
    photo,
    plan,
    travel,
    reason,
    choose,
    deepplay,
    detail,
    // 蒋粤
    mine,
    reg,
    codes,
    per
  }
});

