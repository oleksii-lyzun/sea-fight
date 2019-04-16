<template>
    <div class="rules">
        <div class="rules-header">
            <font-awesome-icon
                icon="question-circle"
                size="4x"
                class="c-pointer"
                @click="showRules = !showRules"
                v-tooltip="'Rules of the game'"
            ></font-awesome-icon>
        </div>
        <div v-if="showRules" class="rules-body">
            <ol>
                <li>You need to place ten ships on your board</li>
                <li>Your board is on the right</li>
                <li>Your ships should consist of one four-square ship, two three-square ships,
                    three two-square ships and four one-square ships</li>
                <li>Ships can not touch each other in any way</li>
                <li>When game started, you and the computer make alternate shots on the opponent's board</li>
                <li>When player hits in the ship, he gets one extra shot</li>
                <li>Wins the one who first destroy all the ships</li>
            </ol>
        </div>
    </div>
</template>

<script>

export default {
    name: "Rules",
    data() {
        return {
            showRules: false,
            height: 0,
        }
    },
}
</script>

<style scoped lang="less">
.rules {
    width: 680px;

    &-header {
        color: #5372FF;
    }
}


</style>