<template>
	<div v-if="!isGameStarted">
		<div v-if="!shipsPlacedCorrectly" class="chart">
			<circle-chart :val="percentOfFourShips"></circle-chart>
			<circle-chart :val="percentOfThreeShips"></circle-chart>
			<circle-chart :val="percentOfTwoShips"></circle-chart>
			<circle-chart :val="percentOfOneShip"></circle-chart>
		</div>
		<div v-else class="button c-pointer">
			<div class="success" @click="userAction('start')">
				<font-awesome-icon icon="check-circle"></font-awesome-icon>
				<span class="button-start">START</span>
			</div>
			<div class="refresh" @click="userAction('refresh')">
				<font-awesome-icon icon="sync-alt"></font-awesome-icon>
				<span class="button-refresh">REFRESH</span>
			</div>
		</div>
	</div>
	<div v-else></div>
</template>

<script>
import CircleChart from './CircleChart.vue';

export default {
	name: "UserFooter",
	components: { CircleChart },
	data() {
		return {}
	},
	props: {
		cnt: {
			required: true,
			type: Object,
		},
	},
	computed: {
		percentOfFourShips() {
			return (this.cnt.four * 100);
		},
		percentOfThreeShips() {
			return (this.cnt.three * 100 / 2).toFixed();
		},
		percentOfTwoShips() {
			return (this.cnt.two * 100 / 3).toFixed();
		},
		percentOfOneShip() {
			return (this.cnt.one * 100 / 4).toFixed();
		},
		shipsPlacedCorrectly() {
			if (!this.cnt) return false;

			let s = this.cnt;
			return s.one === 4 && s.two === 3 && s.three === 2 && s.four === 1;
		},
		isGameStarted() {
			return this.$store.state.gameStarted;
		},
	},
	methods: {
		userAction(status) {
			this.$emit('user-started-game', status);
		}
	}
}
</script>

<style scoped lang="less">

.chart, .button {
	width: 320px;
	height: 90px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 5px;
}

.button {

	> div {
		height: 100%;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&-start, &-refresh {
		margin-left: 5px;
	}
}
</style>