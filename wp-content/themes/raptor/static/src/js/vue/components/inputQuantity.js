export default {
	template: '#input-quantity',
	props: {
		quantity: Number,
		min: Number,
		max: Number
	},
	computed: {
		decreaseDisabled() {
			return this.quantity === this.min;
		},
		increaseDisabled() {
			return this.quantity === this.max;
		}
	},
	methods: {
		decrease() {
			if (this.quantity === 0) return;
			this.$emit('decrease');
			this.change(this.quantity);
		},
		increase() {
			this.$emit('increase');
			this.change(this.quantity);
		},
		change() {
			this.$emit('value', this.quantity);
		}
	}
};
