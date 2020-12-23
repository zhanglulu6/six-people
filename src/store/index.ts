import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
// 这里飘红线是因为版本问题
// import banner from "./banner/index"
// define your typings for the store state
export interface State {
  // count: number
}

// define injection key
export const key: InjectionKey<Store<any>> = Symbol()

export const store = createStore<any>({
  // modules: {
  //   banner
  // }
});
