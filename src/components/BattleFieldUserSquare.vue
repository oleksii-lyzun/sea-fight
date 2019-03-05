<template>
	<div
		class="user-square c-pointer"
		:class="
			[ showMarked ? 'marked' : '', showMissed ? 'missed' : '' ]"
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
		computed: {
			isGameStarted() {
				return this.$store.state.gameStarted;
			},
			isUserMove() {
				return this.$store.state.userMove === 1;
			},
			showMarked() {
				if (this.markStatus === 2 && !this.isGameStarted) return true;
				if (this.markStatus === 2 && ( this.isGameStarted && this.isClicked )) return true;
			},
			showMissed() {
				if (( this.isGameStarted && this.isClicked ) && this.markStatus !== 2) return true;
			}
		},
		methods: {
			onSquareClick() {
				if (this.isGameStarted && this.isUserMove) return;

				let num = Numbers.switchCoordinatesToNumber(this.x, this.y);
				this.clicked = this.markStatus !== 2;

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
		margin: 1px;
		background-color: #1E90FF;
	}

	.marked {
		background-color: #ADFF2F;
	}

	.missed {
		background-color: #FF69B4;
	}
</style>