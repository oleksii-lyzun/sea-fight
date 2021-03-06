import Arrays from '../helpers/Arrays';

export default {
    data() {
        return {
            ships: [],
            startDeck: [],
            gameOver: false,

            /*
                Defines a proper map for specified square
                For example, if marked square index is 10, forbidden square can not be 9,
                because square with 9 index is located on opposite extreme column

                According to the above:
                (squares[0] % 10 === 0) => zerosMap
                (squares[0] % 10 === 9) => ninesMap
                all remaining cases => generalMap
             */
			zerosMap: [-10, -9, +1, +10, +11],
            ninesMap: [-11, -10, -1, +9, +10],
			generalMap: [-11, -10, -9, -1, +1, +9, +10, +11],
        }
    },
    computed: {
        isGameEnded() {
            return this.$store.state.gameEnded;
        }
    },
    created() {
        this.createStartDeck();
    },
    methods: {
        markForbiddenSquares(squares) {
            let forbiddenSquares = [];

            squares.map(el => {
                if (el % 10 === 0) {
                    this.zerosMap.map(m => {
                        if ((el + (m) > - 1) && (el + (m) < 100) && this.startDeck[el + (m)].marked !== 2) {
                            this.startDeck[el + (m)].marked = 1;
                            let sq = el + (m);
                            forbiddenSquares.push(sq);
                        }
                    })
                } else if (el % 10 === 9) {
                    this.ninesMap.map(m => {
                        if ((el + (m) > - 1) && (el + (m) < 100) && this.startDeck[el + (m)].marked !== 2) {
                            this.startDeck[el + (m)].marked = 1;
                            let sq = el + (m);
                            forbiddenSquares.push(sq);
                        }
                    })
                } else {
                    this.generalMap.map(m => {
                        if ((el + (m) > - 1) && (el + (m) < 100) && this.startDeck[el + (m)].marked !== 2) {
                            this.startDeck[el + (m)].marked = 1;
                            let sq = el + (m);
                            forbiddenSquares.push(sq);
                        }
                    })
                }
            });

            return Arrays.unique(forbiddenSquares);
        },
        createStartDeck() {
            for (let y = 0; y < this.columns; y++) {
                for (let x = 0; x < this.rows; x++) {
                    this.startDeck.push({xAxis: x, yAxis: y, marked: 0, clicked: false})
                }
            }
        },
    },
    watch: {
        isGameEnded(newValue) {
            if (newValue) this.gameOver = true;
        }
    },
}