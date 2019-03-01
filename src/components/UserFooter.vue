<template>
	<div class="root">
		<circle-chart :val="percentOfFourShips"></circle-chart>
		<circle-chart :val="percentOfThreeShips"></circle-chart>
		<circle-chart :val="percentOfTwoShips"></circle-chart>
		<circle-chart :val="percentOfOneShip"></circle-chart>
	</div>
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
		}
	}
}
</script>

<style scoped lang="less">
	.root {
		width: 320px;
		height: 90px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>