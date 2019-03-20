<template>
    <div class="root">
        <common-header participant="computer"></common-header>

        <div class="deck-computer">
            <battle-field-computer-square
                    v-for="(square, idx) in stateStartDeck"
                    :key="idx"
                    :x="square.xAxis"
                    :y="square.yAxis"
                    :mark-status="square.marked"
                    :is-clicked="square.clicked"
                    @square-clicked="squareWasClicked"
            ></battle-field-computer-square>
        </div>
    </div>
</template>

<script>
// Components
import BattleFieldComputerSquare from './BattleFieldComputerSquare.vue';
import CommonHeader from './CommonHeader.vue';
// Mixins and helpers
import BattleFieldMixin from '../mixins/BattleFieldMixin.js';
import Numbers from '../helpers/Numbers';

export default {
    name: "BattleFieldComputer",
    mixins: [BattleFieldMixin],
    components: {
        BattleFieldComputerSquare,
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
		}
	},
	computed: {
		/*
			Returns all unmarked indexes from startDeck
			Unmarked squares are accessible as this.startDeck[this.unmarkedSquares[0]]
		 */
		unmarkedSquares() {
			return this.startDeck.map((square, idx) => {
				if (square.marked === 0) return idx;
			}).filter(square => square);
		},
		stateStartDeck() {
			return this.$store.state.computerStartDeck;
		},
		isUserMove() {
			return this.$store.state.userMove === 1;
		},
	},
	methods: {
		// import from BattleFieldMixin presented
		buildOneSquareShip() {
			let randomInt = Numbers.getRandomInt(this.unmarkedSquares.length);

			let availableSquare = [this.unmarkedSquares[randomInt]];
			this.markAvailableSquares(availableSquare);

			let forbiddenSquares = this.markForbiddenSquares(availableSquare);
			let ship = [[... availableSquare, [...forbiddenSquares]]];

			this.ships = this.ships.concat(ship);
		},
		buildNthSquaresShip(squaresCnt) {
			let randomInt = Numbers.getRandomInt(this.unmarkedSquares.length);

			let availableSquares = this.checkAvailableSquares(this.unmarkedSquares[randomInt], squaresCnt);
			if (!availableSquares) return this.buildNthSquaresShip(squaresCnt);

			this.markAvailableSquares(availableSquares);

			let forbiddenSquares = this.markForbiddenSquares(availableSquares);
			let ship = [[... availableSquares, [...forbiddenSquares]]];

			this.ships = this.ships.concat(ship);
		},
		markAvailableSquares(squares, marked = 2, clicked = false) {
			squares.map(square => {
				this.startDeck[square].marked = marked;
				this.startDeck[square].clicked = clicked;
			});
		},
		checkAvailableSquares(startNumber, squaresCnt) {
			if (this.startDeck[startNumber].marked !== 0) return false;
			let randomBoolean = Numbers.getRandomBoolean();

			if (randomBoolean) {
				let verticalSquares = this.checkAvailableSquaresVertically(startNumber, squaresCnt);
				if (verticalSquares.length === squaresCnt) return verticalSquares;

				let horizontalSquares = this.checkAvailableSquaresHorizontally(startNumber, squaresCnt);
				if (horizontalSquares.length === squaresCnt) return horizontalSquares;
			} else {
				let horizontalSquares = this.checkAvailableSquaresHorizontally(startNumber, squaresCnt);
				if (horizontalSquares.length === squaresCnt) return horizontalSquares;

				let verticalSquares = this.checkAvailableSquaresVertically(startNumber, squaresCnt);
				if (verticalSquares.length === squaresCnt) return verticalSquares;
			}

			return false;
		},
		checkAvailableSquaresHorizontally(startNumber, squaresCnt) {
			let horizontal = [startNumber];
			let availableCnt = 0;

			for (let i = 1; i < squaresCnt; i++)
			{
				let conditionRight = startNumber + i;

				if (conditionRight % 10 && this.startDeck[conditionRight].marked === 0) {
					horizontal.push(conditionRight);
				} else {
					break;
				}
			}

			if (horizontal.length === squaresCnt) return horizontal;
			availableCnt = squaresCnt - horizontal.length;

			for (let i = 1; i < availableCnt; i++)
			{
				let conditionLeft = startNumber - i;

				if ((conditionLeft % 10 !== 9) && conditionLeft > -1 && this.startDeck[conditionLeft].marked === 0) {
					horizontal.push(conditionLeft);
				} else {
					break;
				}
			}

			if (horizontal.length === squaresCnt) return horizontal;
			return [startNumber];
		},
		checkAvailableSquaresVertically(startNumber, squaresCnt) {
			let vertical = [startNumber];
			let availableCnt = 0;

			for (let i = 1; i < squaresCnt; i++)
			{
				let conditionDown = startNumber + (i * 10);

				if (conditionDown < 100 && this.startDeck[conditionDown].marked === 0) {
					vertical.push(conditionDown);
				} else {
					break;
				}
			}

			if (vertical.length === squaresCnt) return vertical;
			availableCnt = squaresCnt - vertical.length;

			for (let i = 1; i < availableCnt; i++) {
				let conditionUp = startNumber - (i * 10);
				if (conditionUp > -1 && this.startDeck[conditionUp].marked === 0) {
					vertical.push(conditionUp);
				} else {
					break;
				}
			}

			if (vertical.length === squaresCnt) return vertical;
			return [startNumber];
		},
		createStartDeckWithShips() {
			this.buildNthSquaresShip(4);

			this.buildNthSquaresShip(3);
			this.buildNthSquaresShip(3);

			this.buildNthSquaresShip(2);
			this.buildNthSquaresShip(2);
			this.buildNthSquaresShip(2);

			this.buildOneSquareShip();
			this.buildOneSquareShip();
			this.buildOneSquareShip();
			this.buildOneSquareShip();
		},
		squareWasClicked(squareIdx) {
			this.$store.commit('setUserShot', squareIdx);
		}
	},
	created() {
		this.createStartDeckWithShips();
		this.$store.commit('initializeComputerStartDeck', this.startDeck);
		this.$store.commit('initializeComputerShips', this.ships);
	}
}
</script>

<style scoped lang="less">
.deck-computer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 320px;
    height: 320px;
}
</style>