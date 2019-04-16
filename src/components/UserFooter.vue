<template>
	<div v-if="!isGameStarted || isGameEnded">
		<div v-if="!shipsPlacedCorrectly && !isGameEnded" class="chart">
			<circle-chart v-tooltip="'Four-square ships'" :val="percentOfFourShips"></circle-chart>
			<circle-chart v-tooltip="'Three-square ships'" :val="percentOfThreeShips"></circle-chart>
			<circle-chart v-tooltip="'Two-square ships'" :val="percentOfTwoShips"></circle-chart>
			<circle-chart v-tooltip="'One-square ships'" :val="percentOfOneShip"></circle-chart>
		</div>
		<div v-else-if="isGameEnded" class="button c-pointer">
			<Button
					width="100%"
					height="100%"
					caption="START NEW GAME"
					class="success"
					@click.native="startNewGame"
			>
				<template v-slot:fontAwesome>
					<font-awesome-icon class="button-start" icon="check-circle"></font-awesome-icon>
				</template>
			</Button>
		</div>
		<div v-else class="button c-pointer">
			<Button
					width="50%"
					height="100%"
					caption="START"
					class="success"
					@click.native="userAction('start')"
			>
				<template v-slot:fontAwesome>
					<font-awesome-icon class="button-start" icon="check-circle"></font-awesome-icon>
				</template>
			</Button>
			<Button
					width="50%"
					height="100%"
					caption="REFRESH"
					class="refresh"
					@click.native="userAction('refresh')"
			>
				<template v-slot:fontAwesome>
					<font-awesome-icon class="button-refresh" icon="sync-alt"></font-awesome-icon>
				</template>
			</Button>
		</div>
	</div>
	<div v-else></div>
</template>

<script>
import Button from './Button';
import CircleChart from './CircleChart';

export default {
	name: "UserFooter",
	components: { CircleChart, Button },
	data() {
		return {
			gameOver: false,
		}
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
		isGameEnded() {
			return this.$store.state.gameEnded;
		},
	},
	methods: {
		userAction(status) {
			this.$emit('user-started-game', status);
		},
		startNewGame(){
			window.location.reload();
		}
	},
	watch: {
		isGameEnded(newValue) {
			if (newValue) this.gameOver = true;
		}
	},
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
		margin-right: 5px;
	}
}
</style>