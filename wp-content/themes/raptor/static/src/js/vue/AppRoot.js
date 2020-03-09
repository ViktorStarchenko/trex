import Vue from '../lib/vue';
import vue2storage from '../lib/vue2storage'; // управление localStorage

// Vue компоненты
import { store } from './store'; // паттерн управления состоянием + библиотека
import inputQuantity from './components/inputQuantity'; // подключение component

Vue.use(vue2storage); // использование плагина
Vue.component('input-quantity', inputQuantity); // регистрация компонента
// end Vue includes

const _state = {
	instance: null,
	option: null
};

const _get = {
	/**
	 * Эземпляр
	 */
	get instance() {
		return _state.instance;
	},

	/**
	 * Опции экземпляра
	 */
	get option() {
		return _state.option;
	}
};

const _set = {
	/**
	 * Запись экземпляра
	 * @param { Object } value
	 */
	set instance(value) {
		_state.instance = value;
	},

	/**
	 * Запись опций экземпляра
	 * @param { Object } value
	 */
	set option(value) {
		_state.option = value;
	}
};

/**
 * Опции Vue()
 */
const option = {
	el: '#app-root',

	// использование хранилища
	store,

	// свойства
	data: {},

	// вычесленые свойства
	computed: {
		inputQuantityValue() {
			return store.getters.getInputQuantityValue;
		}
	},

	// наблюдение за свойствами
	watch: {},

	// методы
	methods: {
		increaseInputQuantity() {
			store.commit('SET_INPUT_QUANTITY_VALUE', this.inputQuantityValue + 1);
		},

		decreaseInputQuantity() {
			store.commit('SET_INPUT_QUANTITY_VALUE', this.inputQuantityValue - 1);
		},

		factorial(n) {
			return n ? n * this.factorial(n - 1) : 1;
		},

		formsAction() {

		}
	}
};

function init() {
	_set.option = option;

	if (!window['_isAdmin']) {
		_set.instance = new Vue(_get.option);
	}
};

export default {
	init,
	instance: _get.instance
};
