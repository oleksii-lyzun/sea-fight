<template>
  <div id="app">
    <battle-field-computer></battle-field-computer>
    <battle-field-user></battle-field-user>
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
  }
}
</script>

<style lang="less">
@import "styles/singles";
@import "styles/variables";

#app {
  display: flex;
  width: 800px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
