import Vue from 'vue'
import Vuex from 'vuex'
import Numbers from './helpers/Numbers'
import StoreComputer from './helpers/StoreComputer'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    computerStartDeck: [],
    computerShips: [],

    userStartDeck: [],
    userShips: [],

    gameStarted: false,
    gameEnded: false,
    userMove: 1,
    lastHit: [],
    squareMap: [],

    logger: [],
  },
  actions: {
    setComputerShotAction({commit}) {
      setTimeout(() => {
        commit('setComputerShot');
      }, 3000)
    }
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
    setUserShot(state, squareIndex) {
      state.computerStartDeck[squareIndex].clicked = true;
      state.logger.push(`User shoot square number ${squareIndex}\n`);

      if (state.computerStartDeck[squareIndex].marked === 2) {
        /* deleting marked square from a ship */
        state.computerShips = state.computerShips.map(ship => {
          return ship.filter(el => el !== squareIndex);
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

        if (state.computerShips.length === 0) state.gameEnded = true;

      } else {
        state.userMove = 0;
        this.dispatch('setComputerShotAction');
      }
    },
    setComputerShot(state) {
      let squareIndex = null;

      if (state.lastHit.length === 0) {
          let i = Numbers.getRandomInt(this.getters.allowedUserSquares.length);
          let temp = this.getters.allowedUserSquares[i];
          squareIndex = Numbers.switchCoordinatesToNumber(temp.xAxis, temp.yAxis);
      } else {
          let temp = Numbers.getRandomInt(state.squareMap.length);
          squareIndex = state.squareMap[temp];
      }

      state.userStartDeck[squareIndex].clicked = true;
      state.logger.push(`Computer shoot square number ${squareIndex}\n`);

      let hit = state.userStartDeck[squareIndex].marked === 2;
      let isOneSquareShip = false;

      if (hit) {
        state.userShips = StoreComputer.deleteSquareFromShip(state.userShips, squareIndex);
        state.userShips = state.userShips.map(ship => {
          if (ship.length === 1) {
              isOneSquareShip = true;

              ship[0].map(square => {
                  state.userStartDeck[square].clicked = true;
              });

          }
          return ship;
        }).filter(ship => ship.length > 1);

        if (state.userShips.length === 0) return state.gameEnded = true;

        if (isOneSquareShip) {
            state.lastHit = [];
            state.squareMap = [];
            return this.commit('setComputerShot');
        } else {
            state.lastHit.push(squareIndex);
            state.squareMap = StoreComputer.getMapForFutureHits(state.lastHit, state.userStartDeck);
            return this.commit('setComputerShot');
        }
      } else {
          state.squareMap = StoreComputer.getMapForFutureHits(state.lastHit, state.userStartDeck);
          state.userMove = 1;
      }
    },
  },
  getters: {
    allowedUserSquares: state => {
      return state.userStartDeck.filter(sq => sq.clicked === false);
    }
  }
})