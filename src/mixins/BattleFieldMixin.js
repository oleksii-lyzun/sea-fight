import Arrays from '../helpers/Arrays';

export default {
    data() {
        return {
            ships: [],
            startDeck: [],

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
    created() {
        this.createStartDeck();
    },
    methods: {
        markForbiddenSquares(squares) {
            let forbiddenSquares = [];

            squares.map(square => {

                switch (square % 10) {
                    case 0:
                        let forbiddenZero = this.getForbiddenSquare(this.zerosMap, square);
                        if (forbiddenZero || forbiddenZero === 0) forbiddenSquares.push(forbiddenZero);
                        break;
                    case 9:
                        let forbiddenNine = this.getForbiddenSquare(this.ninesMap, square);
                        if (forbiddenNine || forbiddenNine === 0) forbiddenSquares.push(forbiddenNine);
                        break;
                    default:
                        let forbiddenSquare = this.getForbiddenSquare(this.generalMap, square);
                        if (forbiddenSquare || forbiddenSquare === 0) forbiddenSquares.push(forbiddenSquare);
                        break;
                }
            });

            return Arrays.unique(forbiddenSquares);
        },
        getForbiddenSquare(allowedMap, square) {
            allowedMap.map(el => {
                let forbiddenSquare = square + (el);

                if ((forbiddenSquare > -1) && (forbiddenSquare < 100) && this.startDeck[forbiddenSquare].marked !== 2) {
                    this.startDeck[square + (el)].marked = 1;
                    return forbiddenSquare;
                }

                return false;
            })
        },
        createStartDeck() {
            for (let y = 0; y < this.columns; y++) {
                for (let x = 0; x < this.rows; x++) {
                    this.startDeck.push({xAxis: x, yAxis: y, marked: 0, clicked: false})
                }
            }
        }
    }
}