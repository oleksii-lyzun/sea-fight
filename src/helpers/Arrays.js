export default class Arrays
{
	/*
		Returns new array with only unique values
	 */
	static unique(arr) {
		return [...new Set(arr)];
	}

	/*
		Removes multiple values by indexes from given array
		Returns new array
	 */
	static removeValues(arr, idx) {
		for (let i = idx.length -1; i >= 0; i--)
		{
			arr.splice(idx[i], 1);
		}
		return arr;
	}

	/*
		Clones array using spread syntax
		Sorts cloned array if second parameter is true
	 */
	static clone(arr, shouldSort = false) {
		if (shouldSort) {
			return [...arr].sort();
		} else {
			return [...arr];
		}
	}

	static divideIntoTwoParts(arr, idx) {
		let newArr = Arrays.clone(arr);

		let firstArr = newArr.slice(0, idx);
		let secondArr = newArr.slice(idx + 1);

		return {firstArr, secondArr};
	}
}