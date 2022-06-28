import Vue from 'vue'
import Vuex from 'vuex'
import Class from './class.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		num: '测试 vuex'
	},
	modules: {
		class: Class
	}
})


export default store
