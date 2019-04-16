<template>
    <div class="logger">
        <textarea ref="logger" class="logger-text" readonly>{{ loggerInfo }}</textarea>
    </div>
</template>

<script>
    export default {
        name: "Logger",
        computed: {
            loggerInfo() {
                if (!this.$store.state.gameStarted) return 'Waiting for start of a game...';
                let logs = this.$store.state.logger;

                this.$nextTick(function () {
                    this.$refs.logger.scrollTop = this.$refs.logger.scrollHeight;
                });

                return logs.join('');
            }
        },
    }
</script>

<style scoped lang="less">
.logger {
    width: 680px;

    &-text {
        box-sizing: border-box;
        width: 100%;
        height: 200px;
    }
}
</style>