import vue from 'vue'

export default {

    // 异步陷阱!!!终于明白了promise的作用
    // _get(url, params) {
    //     vue.http.get(url, {params: params}).then(response => {
    //         let res = response.body
    //         return res
    //     }, response => {
    //         console.log('error')
    //         console.log(response.body)
    //     })
    // },

    _get(url, params) {
        let p = new Promise((resolve, reject) => {
            vue.http.get(url, {params: params}).then(response => {
                let res = response.body
                resolve(res)
            }, response => {
                console.log('error')
                reject(response)
            })
        })
        return p
    },
    _post(url, params) {
        let p = new Promise((resolve, reject) => {
            vue.http.post(url, {params: params}).then(response => {
                let res = response.body
                resolve(res)
            }, response => {
                console.log(error)
                reject(response)
            })
        })
        return p
    },
    _jsonp(url ,params, callback) {
        var p = new Promise((resolve, reject) => {
            vue.http.jsonp(url, {params: params, jsonp: callback}).then(response => {
                let res = response.body
                resolve(res)
            }, response => {
                console.log('error');
                reject(response)
            })
        })
        return p
    }
}
