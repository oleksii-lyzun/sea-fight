<template>
	<div class="single-chart">
		<svg viewBox="0 0 36 36" class="circular-chart orange">
			<path class="circle-bg"
				  d="M18 2.0845
					  a 15.9155 15.9155 0 0 1 0 31.831
					  a 15.9155 15.9155 0 0 1 0 -31.831"
			></path>
			<path class="circle"
				  :stroke-dasharray="percent"
				  d="M18 2.0845
					  a 15.9155 15.9155 0 0 1 0 31.831
					  a 15.9155 15.9155 0 0 1 0 -31.831"
			></path>
			<text x="18" y="20.35" class="percentage">{{ val }}%</text>
		</svg>
	</div>
</template>

<script>
	export default {
		name: "CircleChart",
		props: {
			val: {
				type: Number,
				required: true,
			}
		},
		computed: {
			percent() {
				return `${this.val}, 100`;
			}
		},
	}
</script>

<style scoped lang="less">
	.single-chart {
		width: 80px;
		height: 80px;
		justify-content: space-around ;
	}

	.circular-chart {
		display: block;
		margin: 10px auto;
		max-width: 80%;
		max-height: 250px;
	}

	.circle-bg {
		fill: none;
		stroke: #eee;
		stroke-width: 3.8;
	}

	.circle {
		fill: none;
		stroke-width: 2.8;
		stroke-linecap: round;
		animation: progress 1s ease-out forwards;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}

	.circular-chart.orange .circle {
		stroke: #ff9f00;
	}

	.circular-chart.green .circle {
		stroke: #4CC790;
	}

	.circular-chart.blue .circle {
		stroke: #3c9ee5;
	}

	.percentage {
		fill: #666;
		font-family: sans-serif;
		font-size: 0.5em;
		text-anchor: middle;
	}
</style>