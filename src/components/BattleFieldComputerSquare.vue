<template>
	<div
		class="computer-square"
		:class="
			[
				(isClicked) && markStatus === 2 ? 'marked' : '',
				(isClicked) && markStatus !== 2 ? 'missed' : ''
			]"
		@click="onSquareClick()"
	>
		{{ x }}:{{ y }}
	</div>
</template>

<script>
	import Numbers from '../helpers/Numbers.js';

	export default {
		name: "BattleFieldComputerSquare",
		data() {
			return {}
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
				required: true
			}
		},
		computed: {
			isGameStarted() {
				return this.$store.state.gameStarted;
			},
			isUserMove() {
				return this.$store.state.userMove === 1;
			}
		},
		methods: {
			onSquareClick() {
				if (!this.isGameStarted || this.isClicked || (this.isGameStarted && !this.isUserMove)) return;

				let num = Numbers.switchCoordinatesToNumber(this.x, this.y);
				this.$emit('square-clicked', num);
			}
		}
	}
</script>

<style scoped lang="less">
	.computer-square {
		width: 30px;
		height: 30px;
		border: 1px solid #696969;
		background-color: #1E90FF;
	}

	.marked {
		background-color: #ADFF2F;
	}

	.missed {
		background-color: #FFF;
	}
</style>