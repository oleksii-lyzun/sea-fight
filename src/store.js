import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    computerStartDeck: [],
    computerShips: [],
  },
  mutations: {
    initializeComputerStartDeck(state, payload) {
      state.computerStartDeck = payload;
    },
    initializeComputerShips(state, ships) {
      state.computerShips = ships;
    },
    setUserShot(state, squareIdx) {
      state.computerStartDeck[squareIdx].clicked = true;

      if (state.computerStartDeck[squareIdx].marked === 2) {
        /* deleting marked square from a ship */
        state.computerShips = state.computerShips.map(ship => {
          return ship.filter(el => el !== squareIdx);
        });

        /*
          if ship.length === 1 means, that only forbidden squares remains in the ship array,
          all marked squares were deleted from a ship
         */
        state.computerShips = state.computerShips.map(ship => {
          if (ship.length === 1) {
            ship[0].map(square => {
              state.computerStartDeck[square].clicked = true;
            });
          }
          return ship;
        }).filter(ship => ship.length > 1);
      }
    },
  },
})