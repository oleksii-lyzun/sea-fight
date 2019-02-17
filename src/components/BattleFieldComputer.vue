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