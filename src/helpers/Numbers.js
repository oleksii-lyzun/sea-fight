export default class Numbers {
	static getRandomInt(size) {
		return Math.floor(Math.random() * size);
	}
	static getRandomBoolean() {
		return (Math.random() > 0.5);
	}
	static switchCoordinatesToNumber(x,y) {
		if (x === 0 && y === 0) return 0;
		if (y === 0) return x;
		return parseInt(`${y}${x}`);
	}
}