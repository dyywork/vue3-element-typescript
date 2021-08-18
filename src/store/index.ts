import { createStore } from 'vuex'
import getters from '@/store/getters'

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.ts$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules: any, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
export default createStore({
  modules,
  getters
})

// interface StateType {
//   open: boolean
// }
//
// export default createStore({
//   state: {
//     open: false
//   },
//   mutations: {
//     CHANGE_ASIDE: (state: StateType) => {
//       state.open = !state.open
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
