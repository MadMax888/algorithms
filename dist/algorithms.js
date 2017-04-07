"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Algorithms = {
	_comparerf: function _comparerf(a, b) {
		return a == b ? 0 : a > b ? 1 : -1;
	},

	linearSearch: function linearSearch(arr, key) {
		var i = 0;
		while (i < arr.length - 1 && arr[i] !== key) {
			i++;
		}
		return i;
	},

	barrierSearch: function barrierSearch(arr, key) {
		var i = 0;
		arr[arr.length] = key;
		while (arr[i] !== key) {
			i++;
		}
		return i;
	},

	doubleSearchOne: function doubleSearchOne(arr, key) {
		var l = 0,
		    r = arr.length - 1,
		    found = false,
		    m = null;
		while (l <= r && !found) {
			m = function (min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}(l, r);
			if (arr[m] === key) {
				found = true;
			} else if (arr[m] < key) {
				l = m++;
			} else {
				r = m--;
			}
			if (m === r) break;
		}
		return m;
	},

	doubleSearchTwo: function doubleSearchTwo(arr, key) {

		var l = 0,
		    r = arr.length,
		    m = null;
		while (l < r) {
			m = Math.floor((l + r) / 2);
			if (arr[m] < key) {
				l = m++;
			} else {
				r = m;
			}
			if (m === r) break;
		}
		return m;
	},

	strainghtInsertion: function strainghtInsertion(data, comparerf) {
		var i = null,
		    j = null,
		    x = null,
		    arr = [].concat(_toConsumableArray(data));

		if (!arr instanceof Array) return undefined;

		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		for (i = 1; i < arr.length; i++) {
			x = arr[i];
			arr[i] = arr[0];
			j = i;
			while (j - 1 >= 0 && comparerf(arr[j - 1], x) == 1) {
				arr[j] = arr[j - 1];
				--j;
			}
			arr[j] = x;
		}

		return arr;
	},

	strainghtInsertionInv: function strainghtInsertionInv(data, comparerf) {
		var i = null,
		    j = null,
		    x = null,
		    arr = [].concat(_toConsumableArray(data));
		if (!arr instanceof Array) return undefined;

		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		for (i = arr.length - 1; i >= 0; i--) {
			x = arr[i];
			j = i;

			while (j < arr.length - 1 && comparerf(arr[j + 1], x) == 1) {
				arr[j] = arr[j + 1];
				++j;
			}
			arr[j] = x;
		}

		return arr;
	},

	binaryInsertion: function binaryInsertion(data, comparerf) {
		var i = null,
		    j = null,
		    x = null,
		    l = null,
		    r = null,
		    m = null,
		    arr = [].concat(_toConsumableArray(data));

		for (i = 1; i < arr.length; i++) {
			x = arr[i];
			l = 0;
			r = i;

			if (!arr instanceof Array) return undefined;

			if (comparerf === undefined) {
				comparerf = Algorithms._comparerf;
			};

			while (l < r) {
				m = Math.floor((l + r) / 2);
				if (comparerf(arr[m], x) == -1 || comparerf(arr[m], x) == 0) {
					l = ++m;
				} else {
					r = m;
				}
			}
			for (j = i; j >= r + 1; j--) {
				arr[j] = arr[j - 1];
			};

			arr[r] = x;
		}

		return arr;
	},

	strainghtSelection: function strainghtSelection(data, comparerf) {
		var i = null,
		    j = null,
		    k = null,
		    x = null,
		    arr = [].concat(_toConsumableArray(data));

		if (!arr instanceof Array) return undefined;

		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		for (i = 0; i < arr.length; i++) {
			k = i;
			x = arr[i];
			for (j = i + 1; j < arr.length; j++) {
				if (comparerf(arr[j], x) == -1) {
					k = j;
					x = arr[k];
				}
			}
			arr[k] = arr[i];
			arr[i] = x;
		}

		return arr;
	},

	bubbleSort: function bubbleSort(data, comparerf) {
		var i = null,
		    j = null,
		    x = null,
		    arr = [].concat(_toConsumableArray(data));
		if (!arr instanceof Array) return undefined;

		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		for (i = 1; i < arr.length; i++) {
			for (j = arr.length - 1; j >= i; j--) {
				if (comparerf(arr[j - 1], arr[j]) == 1) {
					x = arr[j - 1];
					arr[j - 1] = arr[j];
					arr[j] = x;
				}
			}
		}

		return arr;
	},

	shakerSort: function shakerSort(data, comparerf) {
		var j = null,
		    x = null,
		    l = 1,
		    arr = [].concat(_toConsumableArray(data)),
		    r = arr.length,
		    k = 1;
		if (!arr instanceof Array) return undefined;
		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		do {
			for (j = r - 1; j >= l; j--) {
				if (comparerf(arr[j - 1], arr[j]) == 1) {
					x = arr[j - 1];
					arr[j - 1] = arr[j];
					arr[j] = x;
					k = j;
				}
			}
			l = k + 1;
			for (j = l; j <= r - 1; j++) {
				if (comparerf(arr[j - 1], arr[j]) == 1) {
					x = arr[j - 1];
					arr[j - 1] = arr[j];
					arr[j] = x;
					k = j;
				}
			}
			r = k;
		} while (l < r);

		return arr;
	},

	quickSort: function quickSort(data, comparerf) {

		var arr = [].concat(_toConsumableArray(data));
		var count = 0;

		if (!arr instanceof Array) return undefined;
		if (comparerf === undefined) {
			comparerf = Algorithms._comparerf;
		};

		var sort = function sort(l, r) {
			var w = null,
			    x = null,
			    i = l,
			    j = r;

			x = arr[Math.floor((l + r) / 2)];
			while (i <= j) {
				while (comparerf(arr[i], x) == -1) {
					i += 1;
				}while (comparerf(arr[j], x) == 1) {
					j -= 1;
				}if (i <= j) {
					w = arr[i];
					arr[i] = arr[j];
					arr[j] = w;
					i += 1;
					j -= 1;
				}
			};

			if (l < j) sort(l, j);
			if (i < r) sort(i, r);
		};

		sort(0, arr.length - 1);
		return arr;
	}

};