<template>
	<div class="root">
		<circle-chart></circle-chart>
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
	methods: {

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