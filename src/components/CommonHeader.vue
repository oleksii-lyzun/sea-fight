<template>
    <div class="root"> {{ caption }} </div>
</template>

<script>
export default {
    name: "CommonHeader",
    data() {
        return {}
    },
    props: {
        participant: {
            required: true,
            type: String,
        }
    },
    computed: {
        caption() {
            let gameStarted = this.$store.state.gameStarted;
            let gameEnded = this.$store.state.gameEnded;
            let userMove = this.$store.state.userMove;
            let userShips = this.$store.state.userShips;
            let computerShips = this.$store.state.computerShips;

            if (this.participant === 'computer') {
                if (!gameStarted) return 'Computer ready!';
                if (gameStarted && !userMove && !gameEnded) return 'Computer move';
                if (gameEnded) {
                    if (userShips.length === 0) return 'Ho-ho! I won. Make robots great again!';
                    if (computerShips.length === 0) return 'My retribution will come soon. Beware!'
                }
            } else {
                if (!gameStarted) return 'You need to place your ships!';
                if (gameStarted && userMove && !gameEnded) return 'Your move now';
                if (gameEnded) {
                    if (userShips.length === 0) return 'Game over. Computer wins!';
                    if (computerShips.length === 0) return 'Game over. You win!'
                }
            }

            return 'Waiting...';
        }
    }
}
</script>

<style scoped lang="less">
.root {
    width: 320px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    background-color: #000;
    color: #FFF;
}
</style>