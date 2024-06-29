let newArray = ['banana', 'apple', 'kiwi','pineapple', 34, 45, 13, 24, 11, 9, 17, 58];
let count = 0;
 console.log(newArray.reduce((a, b) =>  //принимает массив и сводит его к одному значению, применяя заданную функцию к каждому элементу массива последовательно.
{
  if (typeof b == "number" && !isNaN(b)) {
    ++count;
    return a += b;
  } else return a
} ,0) / count || 0);
