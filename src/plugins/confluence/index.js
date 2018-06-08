import * as actions from './actions'

export default function () {
  return {
    afterLoad(system) {
      // at this point in time, your actions have been bound into the system
      // so you can do things with them
      // this.rootInjects = this.rootInjects || {}
      // this.rootInjects.myMethod = system.confluenceActions.loadMacro
      system.confluenceActions.loadMacro()
    },
    statePlugins: {
      confluence: {
        // reducers,
        actions,
        // selectors
      }
    }
  }
}
