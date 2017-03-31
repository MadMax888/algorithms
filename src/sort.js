let numbers = [7, 16, 4, 17, 10, 9, 15, 13, 6, 12, 14, 4, 11, 18, 19, 1, 0, 5];


console.log('arr -- ', numbers, numbers.length);

function generateRandomArray (count) {
  let arr = [],
      i = 0;

  while (i < count) {
    arr.push(Math.floor(Math.random() * (count - 0 + 1)) + 0);
    i++;
  };

  return arr;
}

function isSorted(array) {
  let bool = null;

  for (var i = 1; i < array.length; i++) {
    if ( array[i-1] <= array[i] ) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }

  return bool;
}

function testSortAlgorythm(sortAlgorythm)  {
  //  const array = generateRandomArray(100000); // returns array of 1000000 elemenets
   const array = generateRandomArray(100000); // returns array of 1000000 elemenets
   let startTime = new Date().getTime();
   const sortedArray = sortAlgorythm(array);
   let endTime = new Date().getTime();
   if(isSorted(sortedArray)) {
    console.log(sortAlgorythm.name + " success; duration " + (endTime - startTime) + " ms");
   } else {
     console.log(sortAlgorythm.name + " error; duration " + (endTime - startTime) + " ms");
   }
}



function strainghtInsertion(data) {
  let i = null,
      j = null,
      x = null,
      arr = [...data]
      ;

  for (i = 1; i < arr.length; i++) {
    x = arr[i];
    arr[i] = arr[0];
    j = i;
    while (x < arr[j-1] ) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = x;
  }

  return arr;
};

console.log("strainghtInsertion(arr) -- ", strainghtInsertion(numbers));
testSortAlgorythm(strainghtInsertion);

function strainghtInsertionInv(data) {
  let i = null,
      j = null,
      x = null,
      arr = [...data]
      ;

  for (i = arr.length-1; i >= 0; i--) {
    x = arr[i];
    j = i;
    while (x > arr[j+1] ) {
      arr[j] = arr[j+1];
      j++;
    }
    arr[j] = x;
  }

  return arr;
};

console.log("strainghtInsertionInv(arr) -- ", strainghtInsertionInv(numbers));
testSortAlgorythm(strainghtInsertionInv);

function binaryInsertion(data) {
  let i = null,
      j = null,
      x = null,
      l = null,
      r = null,
      m = null,
      arr = [...data]
      ;

  for (i = 1; i < arr.length; i++) {
    x = arr[i];
    l = 0;
    r = i;

    while (l < r) {
      m = Math.floor((l + r) / 2);
      if (arr[m] <= x) {
        // l = m+1;
        l = ++m;
      } else {
        r = m;
      }
    }
    for (j = i; j >= r+1; j--) {
      arr[j] = arr[j-1];
    };

    arr[r] = x;
  }

  return arr;
}

console.log("binaryInsertion(arr) -- ", binaryInsertion([8, 6, 5, 4, 2, 1])); // work incorrectly
testSortAlgorythm(binaryInsertion);

function strainghtSelection (data) {
  let i = null,
      j = null,
      k = null,
      x = null,
      arr = [...data]
      ;
  for (i = 0; i < arr.length; i++) {
    k = i;
    x = arr[i];
    for (j = i+1; j < arr.length; j++) {
      if (arr[j] < x) {
        k = j;
        x = arr[k];
      }
    }
    arr[k] = arr[i];
    arr[i] = x;
  }

  return arr;
}

console.log("strainghtSelection(arr) -- ", strainghtSelection(numbers));
testSortAlgorythm(strainghtSelection);

function bubbleSort (data) {
  let i = null,
      j = null,
      x = null,
      arr = [...data]
      ;

  for (i = 1; i < arr.length; i++) {
    for (j = arr.length; j >= i; j--) {
      if (arr[j-1] > arr[j]) {
        x = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = x;
      }
    }
  }

  return arr;
}

console.log("bubbleSort(arr) -- ", bubbleSort(numbers));
testSortAlgorythm(bubbleSort);

function shakerSort (data) {
  let j = null,
      x = null,
      l = 1,
      arr = [...data],
      r = arr.length,
      k = 1
      // k = 0
      ;
  do {
    for (j = r-1; j >= l; j--) {
      if (arr[j-1] > arr[j]) {
        x = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = x;
        k = j;
      }
    }
    l = k+1;
    for (j = l; j <= r-1; j++) {
      if (arr[j-1] > arr[j]) {
        x = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = x;
        k = j;
      }
    }
    r = k;
  } while (l < r);

  return arr;
}

console.log("shakerSort(arr) -- ", shakerSort(numbers));
testSortAlgorythm(shakerSort); // work incorrectly
