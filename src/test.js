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
