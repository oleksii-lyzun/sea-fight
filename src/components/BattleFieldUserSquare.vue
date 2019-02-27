<template>
	<div
		class="user-square"
		:class="
			[ markStatus === 2 ? 'marked' : '' ]"
		@click="onSquareClick()"
	>
		{{ x }}:{{ y }}
	</div>
</template>

<script>
	import Numbers from '../helpers/Numbers.js';

	export default {
		name: "BattleFieldUserSquare",
		data() {
			return {
				clicked: false,
			}
		},
		props: {
			x: {
				type: Number,
				required: true
			},
			y: {
				type: Number,
				required: true
			},
			markStatus: {
				type: Number,
				required: true
			},
			isClicked: {
				type: Boolean,
				required: true,
			}
		},
		methods: {
			onSquareClick() {
				let num = Numbers.switchCoordinatesToNumber(this.x, this.y);
				this.clicked = !this.clicked;

				let status = { num, clickedStatus : this.clicked };
				this.$emit('square-clicked', status);
			}
		}
	}
</script>

<style scoped lang="less">
	.user-square {
		width: 30px;
		height: 30px;
		border: 1px solid #696969;
		background-color: #1E90FF;
	}

	.marked {
		background-color: #ADFF2F;
	}

	.missed {
		background-color: #FF69B4;
	}
</style>