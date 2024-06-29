function showAverage (arr) {
 const numericArray = arr.filter((item) => typeof item === 'number')
 const sum = numericArray.reduce((acc, number) => acc + number, 0);
 const average = numericArray.length ? sum / numericArray.length : 0;
 return average;
 }
