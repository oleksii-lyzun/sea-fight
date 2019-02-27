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
		}
	},
	methods: {
		squareWasClicked(status) {
			console.log('status', status);
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