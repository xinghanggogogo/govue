import vue from 'vue'

export default {
	initializeDataA({ commit }) {
		commit('INITIALIZE_DATA_A')
	},

	fetchProvince({ commit }, data) {
		console.log(data)
		vue.http.jsonp('http://101.254.157.124:8010/test', {params: {id: data.id, value: data.value}, jsonp: "jsonp"}).then((response) => {
			let res = response.body
			console.log(res)
			commit('FETCH_PROVINCE', res)
		}, (response) => {
			console.log('error')
			console.log(response)
		})
	}
}
