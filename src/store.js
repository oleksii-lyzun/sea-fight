import Vue from 'vue'
import Vuex from 'vuex'
import Numbers from './helpers/Numbers'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    computerStartDeck: [],
    computerShips: [],

    userStartDeck: [],
    userShips: [],

    gameStarted: false,
    userMove: 1,
  },
  mutations: {
    startGame(state) {
      state.gameStarted = true;
    },
    initializeComputerStartDeck(state, payload) {
      state.computerStartDeck = payload;
    },
    initializeComputerShips(state, ships) {
      state.computerShips = ships;
    },
    initializeUserStartDeck(state, payload) {
      state.userStartDeck = payload;
    },
    initializeUserShips(state, ships) {
      state.userShips = ships;
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
      } else {
        state.userMove = 0;
        this.commit('setComputerShot');
      }
    },
    setComputerShot(state) {
      let squareIndex = Numbers.getRandomInt(this.getters.allowedUserSquares.length);
      state.userStartDeck[squareIndex].clicked = true;

      state.userMove = 1;
    },
  },
  getters: {
    allowedUserSquares: state => {
      return state.userStartDeck.filter(sq => sq.clicked !== true);
    }
  }
})