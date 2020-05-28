import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		city:"中原区"
	},
    mutations: {
		setCity(state,name){
			state.city = name;
		}
	},
    actions: {
		setCity(state,name){
			store.commit(state,name)
		}
	}
})
export default store