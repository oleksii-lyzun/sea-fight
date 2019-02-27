export default class Arrays
{
	static unique(arr) {
		return [...new Set(arr)];
	}

	static removeValues(arr, idx) {
		for (let i = idx.length -1; i >= 0; i--)
		{
			arr.splice(idx[i], 1);
		}
		return arr;
	}
}