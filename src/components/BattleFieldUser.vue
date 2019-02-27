<template>
	<div class="deck-user">
		<BattleFieldUserSquare
			v-for="square in startDeck"
			:key="`${square.xAxis}${square.yAxis}`"
			:x="square.xAxis"
			:y="square.yAxis"
			:mark-status="square.marked"
			:is-clicked="square.clicked"
			@square-clicked="squareWasClicked"
		></BattleFieldUserSquare>
	</div>
</template>

<script>
// Components
import BattleFieldUserSquare from './BattleFieldUserSquare.vue';
// Mixins and helpers
import BattleFieldMixin from '../mixins/BattleFieldMixin.js';
import Numbers from '../helpers/Numbers';

export default {
	name: "BattleFieldUser",
	mixins: [BattleFieldMixin],
	components: {
		BattleFieldUserSquare,
	},
	props: {
		rows: {
			default: 10,
			type: Number,
			required: false,
		},
		columns: {
			default: 10,
			type: Number,
			required: false,
		}
	},
	data() {
		return {
			// import from BattleFieldMixin presented

			forbiddenSquares: [-11, -9, +9, +11],
			forbiddenSquaresZeros: [-9, +11],
			forbiddenSquaresNines: [-11, +9],
		}
	},
	methods: {
		squareWasClicked(status) {
			this.addShip(status);
		},
		addShip(status) {
			let squareNumber = status.num;
			let clickedStatus = status.clickedStatus;

			let diagonalClick = this.checkDiagonal(squareNumber);
			if (diagonalClick) return;

			this.setMarkedStatus(squareNumber, clickedStatus);
		},
		setMarkedStatus(square, clickedStatus) {
			if (clickedStatus) {
				this.startDeck[square].marked = 2;
			} else {
				this.startDeck[square].marked = 0;
			}
		},
		checkDiagonal(square) {
			let isForbidden = false;

			this.startDeck.map( () => {
				if (square % 10 === 0) {
					this.forbiddenSquaresZeros.map(sq => {
						let sum = square + (sq);
						if (sum > -1 && sum < 100) {
							if (this.startDeck[square + (sq)].marked === 2) isForbidden = true;
						}
					})
				} else if (square % 10 === 9) {
					this.forbiddenSquaresNines.map(sq => {
						let sum = square + (sq);
						if (sum > -1 && sum < 100) {
							if (this.startDeck[square + (sq)].marked === 2) isForbidden = true;
						}
					})
				} else {
					this.forbiddenSquares.map(sq => {
						let sum = square + (sq);
						if (sum > -1 && sum < 100) {
							if (this.startDeck[square + (sq)].marked === 2) isForbidden = true;
						}
					})
				}
			});

			return isForbidden;
		},
	},

}
</script>

<style scoped lang="less">
	.deck-user {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 320px;
		height: 320px;
	}
</style>