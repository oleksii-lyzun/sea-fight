export default class StoreComputer {
    
    /*
        Find a ship by given squareIndex
        Returns Object 
        Object.i -> index of ship in ships array
        Object.l -> length of this ship
    */
    static findShip(ships, squareIndex) {
        let ship = {};

        ships.map((el, idx) => {
            if (el.indexOf(squareIndex) !== -1) {
                ship = { i: idx, l: el.length };
            }
        });

        return ship;
    }

    static deleteSquareFromShip(ships, idx) {
        return ships.map(ship => {
            return ship.filter(el => el !== idx);
        })
    }

    static getMapForFutureHits(hits, userDeck) {
        if (hits.length === 1) {
            return StoreComputer.getMapForOneHit(hits, userDeck);
        } else {
            return StoreComputer.getMapForMultipleHits(hits, userDeck);
        }
    }

    static getMapForOneHit(hit, userDeck) {
        let squareMap = [];
        hit = parseInt(hit);

        if (hit % 10 === 0) {
            squareMap = [-10, +1, +10];
        } else if (hit % 10 === 9) {
            squareMap = [-10, -1, +10];
        } else {
            squareMap = [-10, -1, +1, +10];
        }

        return squareMap.map(square => {
            return hit + (square);
        })
            .filter(square => square > -1 && square < 100)
            .filter(square => userDeck[square].clicked === false);
    }

    static getMapForMultipleHits(hits, userDeck) {
        let first = parseInt(hits[0]);
        let last = parseInt(hits[hits.length - 1]);
        let diff = last - first;
        console.log('diff', diff);

        if (diff > -4 && diff < 4) {
            let j = StoreComputer.getMapHorizontal(first, last, userDeck);
            console.log('j', j);
            return j;
        } else {
            let l = StoreComputer.getMapVertical(first, last, userDeck);
            console.log('l', l);
            return l;
        }
    }

    static getMapVertical(hitFirst, hitSecond, userDeck) {
        let squareMap = [-10, +10];
        let first =  squareMap.map(square => {
            return hitFirst + (square);
        })
            .filter(square => square > -1 && square < 100)
            .filter(square => userDeck[square].clicked === false);

        let second = squareMap.map(square => {
            return hitSecond + (square);
        })
            .filter(square => square > -1 && square < 100)
            .filter(square => userDeck[square].clicked === false);

        return [...first, ...second];
    };

    static getMapHorizontal(hitFirst, hitSecond, userDeck) {
        let squareMapFirst = [];
        let squareMapSecond = [];

        if (hitFirst % 10 === 0) {
            squareMapFirst = [+1];
        } else if(hitFirst % 10 === 9) {
            squareMapFirst = [-1];
        }
        else {
            squareMapFirst = [-1, +1];
        }

        if (hitSecond % 10 === 9) {
            squareMapSecond = [-1];
        } else if(hitSecond % 10 === 0) {
            squareMapSecond = [+1];
        } else {
            squareMapSecond = [-1, +1]
        }

        let first =  squareMapFirst.map(square => {
            return hitFirst + (square);
        })
            .filter(square => square > -1 && square < 100)
            .filter(square => userDeck[square].clicked === false);

        let second = squareMapSecond.map(square => {
            return hitSecond + (square);
        })
            .filter(square => square > -1 && square < 100)
            .filter(square => userDeck[square].clicked === false);

        return [...first, ...second];
    };
}