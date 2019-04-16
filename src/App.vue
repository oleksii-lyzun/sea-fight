<template>
  <div id="app">
    <div class="decks">
      <battle-field-computer class="m-right-20"></battle-field-computer>
      <battle-field-user class="m-left-20"></battle-field-user>
    </div>
    <rules v-if="!isGameStarted" class="rules"></rules>
    <logger v-else class="log"></logger>
  </div>
</template>

<script>
import BattleFieldComputer from './components/BattleFieldComputer';
import BattleFieldUser from './components/BattleFieldUser';
import Logger from './components/Logger';
import Rules from './components/Rules';

export default {
    name: 'app',
    components: {
    BattleFieldUser,
    BattleFieldComputer,
    Logger,
    Rules
    },
    computed: {
      isGameStarted() {
          return this.$store.state.gameStarted;
      },
    },
}
</script>

<style lang="less">
@import "styles/singles";
@import "styles/variables";
@import "styles/tooltip";

    .decks {
      display: flex;
      width: 100%;
      min-width: 768px;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }

    .log, .rules {
      margin: 10px auto;
    }
</style>
