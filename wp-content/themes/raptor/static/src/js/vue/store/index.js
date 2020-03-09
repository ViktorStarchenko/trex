import Vue from '../../lib/vue';
import Vuex from '../../lib/vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		inputQuantittyValue: 0
	},

	getters: {
		getInputQuantityValue: state => {
			return state.inputQuantittyValue;
		},
	},

	mutations: {
		SET_INPUT_QUANTITY_VALUE(state, value) {
			state.inputQuantittyValue = value;
		}
	},

	actions: {},
});
