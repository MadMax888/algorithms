"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function generateRandomArray(count) {
  var arr = [],
      i = 0;

  while (i < count) {
    arr.push(Math.floor(Math.random() * (count - 0 + 1)) + 0);
    i++;
  };

  return arr;
}

function isSorted(array) {
  var bool = null;

  for (var i = 1; i < array.length; i++) {
    if (array[i - 1] <= array[i]) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }

  return bool;
}

function testSortAlgorythm(sortAlgorythm) {
  //  const array = generateRandomArray(100000); // returns array of 1000000 elemenets
  var array = generateRandomArray(100000); // returns array of 1000000 elemenets
  var startTime = new Date().getTime();
  var sortedArray = sortAlgorythm(array);
  var endTime = new Date().getTime();
  if (isSorted(sortedArray)) {
    console.log(sortAlgorythm.name + " success; duration " + (endTime - startTime) + " ms");
  } else {
    console.log(sortAlgorythm.name + " error; duration " + (endTime - startTime) + " ms");
  }
}

function strainghtInsertion(data, comparerf) {
  var i = null,
      j = null,
      x = null,
      arr = [].concat(_toConsumableArray(data));

  if (!arr instanceof Array) return undefined;

  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
  };

  for (i = 1; i < arr.length; i++) {
    x = arr[i];
    arr[i] = arr[0];
    j = i;
    while (x <= arr[j - 1]) {
      // ?! out of range to -1
      // while (comparerf(arr[j-1], x) == 1) {
      arr[j] = arr[j - 1];
      --j;
    }
    arr[j] = x;
  }

  return arr;
};

console.log("strainghtInsertion(arr) -- ", strainghtInsertion([33, 31, 4, 33, 0, 8, 3, 69, 113, 1]));
// console.log(strainghtInsertion ([33, 31, 4, 33, 0, 8, 3, 69, 113, 1], function(a, b) {
//   if (a == b) return 0;
//   if (a > b) return 1;
//   if (a < b) return -1;
// }));
// let arOb = [{tp: 33},{tp: 31},{tp: 4},{tp: 33},{tp: 0},{tp: 8},{tp: 3},{tp: 69},{tp: 113},{tp: 1}];
// console.log(strainghtInsertion (arOb, function(a, b) {
//   if (a.tp == b.tp) return 0;
//   if (a.tp > b.tp) return 1;
//   if (a.tp < b.tp) return -1;
// }));
// testSortAlgorythm(strainghtInsertion);

function strainghtInsertionInv(data, comparerf) {
  var i = null,
      j = null,
      x = null,
      arr = [].concat(_toConsumableArray(data));
  if (!arr instanceof Array) return undefined;

  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
  };

  for (i = arr.length - 2; i > -1; i--) {
    x = arr[i];
    j = i;
    // while (x > arr[j+1] ) {
    while (comparerf(x, arr[j + 1]) == 1) {
      arr[j] = arr[j + 1];
      ++j;
    }
    arr[j] = x;
  }

  return arr;
};
// console.log("strainghtInsertionInv (arr) -- ", strainghtInsertionInv ([5,567,4,21,0,7,8,9,9,1]));
// console.log(strainghtInsertionInv ([5,567,4,21,2,7,8,9,9,0], function(a, b) {
//   return a - b;
// }));
// console.log(strainghtInsertionInv ([5,567,4,21,2,7,8,9,9,0], function(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }));
// let arOb = [{tp: 33},{tp: 31},{tp: 4},{tp: 33},{tp: 0},{tp: 8},{tp: 3},{tp: 69},{tp: 113},{tp: 1}];
// console.log(strainghtInsertionInv (arOb, function(a, b) {
//   if (a.tp > b.tp) return 1;
//   if (a.tp < b.tp) return -1;
// }));
// console.log(strainghtInsertionInv (arOb));
//
// let arObT = [{tp: "sd"},{tp: "azc"},{tp: "sd"},{tp: "vmk"},{tp: "srtt"},{tp: "op"},{tp: "mk"}];
// console.log(strainghtInsertionInv (arObT, function(a, b) {
//   if (a.tp > b.tp) return 1;
//   if (a.tp < b.tp) return -1;
// }));
// testSortAlgorythm(strainghtInsertionInv);

function binaryInsertion(data, comparerf) {
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

    if (comparerf == undefined) {
      comparerf = function comparerf(a, b) {
        return a == b ? 0 : a > b ? 1 : -1;
      };
    };

    while (l < r) {
      m = Math.floor((l + r) / 2);
      // if (arr[m] <= x) {
      if (comparerf(arr[m], x) == -1 || comparerf(arr[m], x) == 0) {
        // l = m+1;
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
}

// console.log("binaryInsertion(arr) -- ", binaryInsertion([8, 6, 5, 4, 2, 1])); // work incorrectly
// testSortAlgorythm(binaryInsertion);

function strainghtSelection(data, comparerf) {
  var i = null,
      j = null,
      k = null,
      x = null,
      arr = [].concat(_toConsumableArray(data));

  if (!arr instanceof Array) return undefined;

  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
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
}

function bubbleSort(data, comparerf) {
  var i = null,
      j = null,
      x = null,
      arr = [].concat(_toConsumableArray(data));
  if (!arr instanceof Array) return undefined;

  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
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
}

// testSortAlgorythm(bubbleSort);

function shakerSort(data, comparerf) {
  var j = null,
      x = null,
      l = 1,
      arr = [].concat(_toConsumableArray(data)),
      r = arr.length,
      k = 1;
  if (!arr instanceof Array) return undefined;
  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
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
}

// console.log("shakerSort(arr) -- ", shakerSort(numbers));

// testSortAlgorythm(shakerSort);


function quickSort(data, comparerf) {

  var arr = [].concat(_toConsumableArray(data));
  var count = 0;

  if (!arr instanceof Array) return undefined;
  if (comparerf == undefined) {
    comparerf = function comparerf(a, b) {
      return a == b ? 0 : a > b ? 1 : -1;
    };
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

// testSortAlgorythm(quickSort);