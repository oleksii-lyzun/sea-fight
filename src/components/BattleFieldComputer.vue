<template>
	<div class="deck-computer">
		<battle-field-computer-square
			v-for="square in startDeck"
			:key="`${square.xAxis}${square.yAxis}`"
			:x="square.xAxis"
			:y="square.yAxis"
			:mark-status="square.marked"
			:is-clicked="square.clicked"
			@square-clicked="squareWasClicked"
		></battle-field-computer-square>
	</div>
</template>

<script>
import BattleFieldMixin from '../mixins/BattleFieldMixin.js';
import BattleFieldComputerSquare from './BattleFieldComputerSquare.vue';

import Numbers from '../helpers/Numbers';

export default {
    name: "BattleFieldComputer",
    mixins: [BattleFieldMixin],
    components: {
			BattleFieldComputerSquare
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
			return {}
        },
        methods: {
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
            squareWasClicked(num) {
                console.log('Clicked!');
            }
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