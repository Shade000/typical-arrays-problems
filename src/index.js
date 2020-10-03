exports.min = function min (array) {
	if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
		return Math.min.apply(null, array);
	} else {
		return 0;
	}
}

exports.max = function max (array) {
	if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
		return Math.max.apply(null, array);
	} else {
		return 0;
	}
}


exports.avg = function avg (array) {
	if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
		function getAvg(array) {
			const total = array.reduce((acc, c) => acc + c, 0);
			return total / array.length;
		}
		return getAvg(array);
	} else {
		return 0;
	}
}
