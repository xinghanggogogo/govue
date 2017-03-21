const INITIALIZE_DATA_A = 'INITIALIZE_DATA_A'
const FETCH_PROVINCE = 'FETCH_PROVINCE'
export default {

	[INITIALIZE_DATA_A](state) {
		state.itemTagModuleA = '这是经过vuex-moduleB维护的state';
	},

	[FETCH_PROVINCE](state, res) {
		state.province = res.shows
	}

}
