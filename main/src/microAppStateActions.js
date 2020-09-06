// 通过qiankun的initGlobalState实现项目间的通信
import { initGlobalState } from 'qiankun'

const state = {name: 'zhangsan'}
const actions = initGlobalState(state)

export default actions