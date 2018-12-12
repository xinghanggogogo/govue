import actions from './action'
import mutations from './mutations'
import * as getters from './getters'

const state = {
	itemTagModuleA: '这是moduleA初始的state',
	province: '北京',
	tvshow: [1, 2]
}

export default {
	state,
	actions,
	mutations,
	getters
}
