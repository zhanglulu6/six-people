export default {
  changeCity(state: any, payload: any): any {
    state.confirmCity = state.items[payload.activeId ].children[payload.activeIndex -1];
    state.item.activeId = payload.activeId;
    state.item.activeIndex = payload.activeIndex;
  }
}
