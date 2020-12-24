import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
// 这里飘红线是因为版本问题

import mine from './Mine/index';
import  reg from "./Reg/index";
import codes from "./Codes/index";

// define your typings for the store state
export interface State {
  // count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  // state: {
  //   count: 0
  // },
  
  // 导入vuex模块
  modules: {
    mine,
    reg,
    codes
  }
})
