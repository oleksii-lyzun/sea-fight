<template>
  <div id="app">
    <battle-field-computer></battle-field-computer>
  </div>
</template>

<script>
import BattleFieldComputer from './components/BattleFieldComputer.vue';

export default {
  name: 'app',
  components: {
    BattleFieldComputer
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  width: 800px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
