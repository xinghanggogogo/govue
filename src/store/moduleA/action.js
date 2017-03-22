//import vue from 'vue'
//import fetchJsonp from 'fetch-jsonp'

import utils from '../utils.js'

export default {

	initializeDataA({ commit }) {
		commit('INITIALIZE_DATA_A')
	},

	fetchProvince({ commit }, params) {
		//内部封装
		utils._get('http://ditu.amap.com/service/regeo', params).then(res => {
			commit('FETCH_PROVINCE', res)
		}).catch(res => {
			console.log(res)
		})

		// vue自带的http方法
		// vue.http.get('http://ditu.amap.com/service/regeo', {params: {longitude: data.longitude, latitude: data.latitude}}).then((response) => {
		// 	let res = response.body
		// 	console.log(res)
		// 	commit('FETCH_PROVINCE', res)
		// }, (response) => {
		// 	console.log('error')
		// 	console.log(response)
		// })

		// fetch方法
		// let url = `http://ditu.amap.com/service/regeo?longitude=${data.longitude}&latitude=${data.latitude}`
		// console.log(url);
		// fetch(url).then((response) => {
		// 	console.log('success')
		// 	if (response.ok) {
		// 		response.json().then(response => {
		// 			console.log(response)
		// 			console.log(response.data.province)
		// 		})
		// 	}
		// }, (response) => {
		// 	console.log('fail')
		// 	console.log(response)
		// })
	},

	fetchTvShow({ commit }) {
		//内部封装
		utils._jsonp('http://101.254.157.124:8010/test', {}, 'jsonp').then(res => {
			commit('FETCH_TVSHOW', res)
		}).catch(res => {
			console.log(res)
		})

		// vue自带的http方法
		// vue.http.jsonp('http://101.254.157.124:8010/test', {params: {}, jsonp: 'jsonp'}).then((response) => {
		// 	let res = response.body
		// 	console.log(response.body)
		// 	commit('FETCH_TVSHOW', res)
		// }, (response) => {
		// 	console.log('error')
		// 	console.log(response)
		// })

		// fetch-jsonp方法
		// fetchJsonp('http://101.254.157.124:8010/test', {jsonpCallback: 'jsonp'}).then((response) => {
		// 	console.log('success')
		// 	if (response.ok) {
		// 		response.json().then( response => {
		// 			console.log(response.shows)
		// 		})
		// 	}
		// }, (response) => {
		// 	console.log('fail')
		// 	console.log(response)
		// })
	}
}
