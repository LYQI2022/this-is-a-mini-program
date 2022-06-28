export default {
	namespaced: true,
	state: {
		type: '未设置'
	},
	mutations: {
		updateType(state, type) {
			// console.log(type);
			state.type = type
		}
	}
}
