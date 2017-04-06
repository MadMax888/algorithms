let arr = [16, 17, 10, 11, 13, 12, 14, 15, 18, 19,];
console.log('arr -- ', arr, arr.length);



function linearSearch(arr, key) {
	let i = 0;
	while (i < arr.length-1 && arr[i] !== key ) {
	  i++;
	}
	return i;
};

function barrierSearch(arr, key) {
	let i = 0;
  arr[arr.length] = key;
	while (arr[i] !== key ) {
	  i++;
	}
	return i;
};

let arrSorted = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; // for double search
console.log('arrSorted -- ', arrSorted, arrSorted.length);

function doubleSearchOne(arr, key) {
  let l = 0,
      r = arr.length-1,
      found = false,
      m = null
      ;
  while ( l <= r && !found) {
    m = ((min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    })(l,r);
    if ( arr[m] === key) {
      found = true;
    }
    else if(arr[m] < key) {
      l = m++;
    } else {
      r = m--;
    }
		if ( m === r) break;
  }
  return m;
};


function doubleSearchTwo(arr, key) {
  let l = 0,
      r = arr.length,
      m = null
      ;
  while (l < r) {
    m = Math.floor((l + r)/2);
    if (arr[m] < key) {
      l = m++;
    } else {
      r = m;
    }
    if ( m === r) break;
  }
  return  m;
};


// array.indexOf() // - linear search
// що маємо:
// звичайний масив: швидкість пошуку n, швидкість вставки 1
// відсортований масив: швидкість пошуку log n, швидкість вставки log n
// тобто масив треба вибирати відповідно до задачі
// і якщо в ньому часто треба шукати, то краще тримати його відсортованим
// хоча швидкість вставки буде меньше
