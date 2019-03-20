<template>
	<div class="root">
        <common-header participant="user"></common-header>

        <div class="deck-user">
			<BattleFieldUserSquare
				v-for="square in stateStartDeck"
				:key="`${square.xAxis}${square.yAxis}`"
				:x="square.xAxis"
				:y="square.yAxis"
				:mark-status="square.marked"
				:is-clicked="square.clicked"
				@square-clicked="squareWasClicked"
			></BattleFieldUserSquare>
		</div>
		<user-footer :cnt="shipsCnt" @user-started-game="gameStartRequest"></user-footer>
	</div>
</template>

<script>
	// Components
	import BattleFieldUserSquare from './BattleFieldUserSquare.vue';
	import UserFooter from './UserFooter';
    import CommonHeader from './CommonHeader.vue';
	// Mixins and helpers
	import BattleFieldMixin from '../mixins/BattleFieldMixin.js';
	import Arrays from '../helpers/Arrays';

	export default {
	name: "BattleFieldUser",
	mixins: [BattleFieldMixin],
	components: {
		BattleFieldUserSquare,
		UserFooter,
        CommonHeader,
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
		isGameStarted() {
			return this.$store.state.gameStarted;
		},
		stateStartDeck() {
			if (this.isGameStarted) {
				return this.$store.state.userStartDeck;
			} else {
				return this.startDeck;
			}
		},
	},
	methods: {
		gameStartRequest(status) {
			if (status === 'refresh') return this.refreshAllShips();
			if (status === 'start') {
				this.ships = this.ships.map(ship => {
					let forbidden = this.markForbiddenSquares(ship);
					ship = [...ship, [...forbidden]];
					return ship;
				});
				this.$store.commit('initializeUserStartDeck', this.startDeck);
				this.$store.commit('initializeUserShips', this.ships);
				this.$store.commit('startGame');
				console.log('ships', this.ships);
			}
		},
		refreshAllShips() {
			this.ships.map(ship => {
				ship.map(square => {
					this.startDeck[square].marked = 0;
				});
			});
			this.ships = [];
		},
		squareWasClicked(status) {
			this.addShip(status);
		},
		addShip(status) {
			let squareNumber = status.num;
			let clickedStatus = status.clickedStatus;

			let diagonalClick = this.checkDiagonal(squareNumber);
			if (diagonalClick) return;

			this.updateShips(squareNumber, clickedStatus);
		},
		updateShips(squareNumber, clickedStatus) {
			if (clickedStatus) {
				let shipAdded = this.addToShip(squareNumber, clickedStatus);
				if (shipAdded) this.setMarkedStatus(squareNumber, clickedStatus);
				return shipAdded;
			} else {
				let shipDeleted = this.deleteFromShip(squareNumber, clickedStatus);
				if (shipDeleted) this.setMarkedStatus(squareNumber, clickedStatus);
				return shipDeleted;
			}
		},
		deleteFromShip(squareNumber) {
			let shipIndex = this.findShipForDeletion(squareNumber);

			if (this.ships[shipIndex].length === 1) {
				this.ships.splice(shipIndex, 1);
				return true;
			} else {
				return this.splitOneShip(shipIndex, squareNumber);
			}
		},
		splitOneShip(shipIndex, squareNumber) {
			let ship = Arrays.clone(this.ships[shipIndex], true);
			let squareIndex = ship.indexOf(squareNumber);

			if (squareIndex === 0 || squareIndex === (ship.length - 1)) {
				ship.splice(squareIndex, 1);

				this.ships.splice(shipIndex, 1);
				this.ships = [...this.ships, ship];
				return true;

			} else {
				let newShips = Arrays.divideIntoTwoParts(ship, squareIndex);
				if (this.ships.length < 10) {
					this.ships.splice(shipIndex, 1);
					this.ships = [...this.ships, newShips.firstArr, newShips.secondArr];
					return true;
				}
			}
		},
		findShipForDeletion(squareNumber) {
			let idx = null;
			this.ships.map((ship, index) => {
				if (ship.indexOf(squareNumber) !== -1) idx = index;
			});
			return idx;
		},
		addToShip(squareNumber) {
			let cnt = [];
			let parts = null;

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
				return this.glueTwoShips(cnt, squareNumber);
			}
			if (cnt.length === 1) {
				return this.extendOneShip(parts, squareNumber);
			}

			if (this.totalShipsCnt < 10) {
				return this.ships = [...this.ships, [squareNumber]];
			}

			return false;
		},
		glueTwoShips(cnt, squareNumber) {
			let isAdded = null;

			let newShip = [...this.ships[cnt[0]], ...this.ships[cnt[1]]];
			if (newShip.length > 3) return isAdded = false;

			isAdded = true;
			this.ships = Arrays.removeValues(this.ships, cnt);
			this.ships.push([...newShip, squareNumber]);

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

						if (shipLength === 4) {
							isAdded = false;
						} else {
							isAdded = true;
							this.ships[i].push(squareNumber);
						}
					}
				}
			}

			return isAdded;
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