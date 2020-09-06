// 接收主应用传来的action
class Actions {
  constructor() {
    this.actions = {}
  }

  setActions(actions) {
    this.actions = actions
  }

  onGlobalStateChange(...args) {
    return this.actions['onGlobalStateChange'](...args)
  }

  setGlobalState(value) {
    return this.actions['setGlobalState'](value)
  }
}

const actions = new Actions()

export default actions