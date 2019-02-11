import Arrays from '../helpers/Arrays';

export default {
    data() {
        return {
            ships: [],
            startDeck: [],

            // (squares[0] % 10 === 0) => zerosMap
			zerosMap: [-10, -9, +1, +10, +11],
			// (squares[0] % 10 === 9) => ninesMap
            ninesMap: [-11, -10, -1, +9, +10],
            // all other squares
			generalMap: [-11, -10, -9, -1, +1, +9, +10, +11],
        }
    },
    created() {
        this.createStartDeck();
    },
    methods: {
        createStartDeck() {
            for (let y = 0; y < this.columns; y++) {
                for (let x = 0; x < this.rows; x++) {
                    this.startDeck.push({xAxis: x, yAxis: y, marked: 0, clicked: false})
                }
            }
        }
    }
}