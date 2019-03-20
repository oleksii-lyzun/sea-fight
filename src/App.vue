<template>
  <div id="app">
    <battle-field-computer class="m-right-20"></battle-field-computer>
    <battle-field-user class="m-left-20"></battle-field-user>
  </div>
</template>

<script>
import BattleFieldComputer from './components/BattleFieldComputer.vue';
import BattleFieldUser from './components/BattleFieldUser.vue';

export default {
  name: 'app',
  components: {
    BattleFieldUser,
    BattleFieldComputer
  },
}
</script>

<style lang="less">
@import "styles/singles";
@import "styles/variables";

#app {
  display: flex;
  width: 100%;
  min-width: 700px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
</style>
