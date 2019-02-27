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
import Arrays from '../helpers/Arrays';

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

			allowedSquares: [-10, -1, +1, +10],
			allowedSquaresZeros: [-10, +1, +10],
			allowedSquaresNines: [-10, -1, +10],

			forbiddenSquares: [-11, -9, +9, +11],
			forbiddenSquaresZeros: [-9, +11],
			forbiddenSquaresNines: [-11, +9],
		}
	},
	computed: {
		shipsCnt() {
			let cnt = {one: 0, two: 0, three: 0, four: 0};
			this.ships.map(ship => {
				switch (ship.length) {
					case 1:
						cnt.one++;
						break;
					case 2:
						cnt.two++;
						break;
					case 3:
						cnt.three++;
						break;
					case 4:
						cnt.four++;
						break;
				}
			});
			return cnt;
		},
		totalShipsCnt() {
			return this.ships.length;
		},
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

			this.updateShips(squareNumber, clickedStatus);

			this.setMarkedStatus(squareNumber, clickedStatus);
		},
		updateShips(squareNumber, clickedStatus) {
			if (clickedStatus) {
				this.addToShip(squareNumber, clickedStatus);
			}
		},
		addToShip(squareNumber) {
			let cnt = [];
			let parts = null;
			let isAdded = null;

			if (squareNumber % 10 === 0) {
				parts = this.allowedSquaresZeros.map(el => squareNumber + (el)).filter(el => el > -1 && el < 100);
			} else if (squareNumber % 10 === 9) {
				parts = this.allowedSquaresNines.map(el => squareNumber + (el)).filter(el => el > -1 && el < 100);
			} else {
				parts = this.allowedSquares.map(el => squareNumber + (el)).filter(el => el > -1 && el < 100);
			}

			this.ships.map((ship, index) => {
				ship.map(square => {
					if (parts.indexOf(square) !== -1) {
						cnt.push(index);
					}
				})
			});

			if (cnt.length === 2) {
				isAdded = this.glueTwoShips(cnt, squareNumber);
			} else {
				isAdded = this.extendOneShip(parts, squareNumber);
			}

			if (isAdded === null && this.totalShipsCnt < 10) {
				this.ships = [...this.ships, [squareNumber]];
				isAdded = true;
			} else {
				isAdded = false;
			}

			console.log('this.ships', this.ships);

			return isAdded;
		},
		glueTwoShips(cnt, squareNumber) {
			let isAdded = null;

			let newShip = [...this.ships[cnt[0]], ...this.ships[cnt[1]]];

			if (newShip.length === 4) isAdded = false;
			if (newShip.length === 3 && this.shipsCnt.four === 0) {
				isAdded = true;
				this.ships = Arrays.removeValues(this.ships, cnt);
				this.ships.push([...newShip, squareNumber]);
			}
			if (newShip.length === 2 && this.shipsCnt.three < 2) {
				isAdded = true;
				this.ships = Arrays.removeValues(this.ships, cnt);
				this.ships.push([...newShip, squareNumber]);
			}
			if (newShip.length === 1 && this.shipsCnt.two < 3) {
				isAdded = true;
				this.ships = Arrays.removeValues(this.ships, cnt);
				this.ships.push([...newShip, squareNumber]);
			}

			return isAdded;
		},
		extendOneShip(parts, squareNumber) {
			let isAdded = null;

			for (let i = 0; i < this.ships.length; i++)
			{
				for (let j = 0; j < this.ships[i].length; j++)
				{
					let square = this.ships[i][j];
					if (parts.indexOf(square) !== -1) {
						let shipLength = this.ships[i].length;

						if (shipLength === 4) isAdded = false;
						if (shipLength === 3 && this.shipsCnt.four === 0) {
							isAdded = true;
							this.ships[i].push(squareNumber);
						}
						if (shipLength === 2 && this.shipsCnt.three < 2) {
							isAdded = true;
							this.ships[i].push(squareNumber);
						}
						if (shipLength === 1 && this.shipsCnt.two < 3) {
							isAdded = true;
							this.ships[i].push(squareNumber);
						}
					}
				}
			}

			return isAdded;
		},
		deleteFromShip() {
			console.log('Not ready');
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