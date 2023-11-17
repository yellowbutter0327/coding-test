function solution(arr) {
  let firstNum = 0;
  for (let i = 0; i < arr.length; i++) {
    firstNum += arr[i];
  }
  let average = firstNum / arr.length;
  return average;
}

function solution(arr) {
  let result = 0;
  arr.forEach((a) => {
    return (result += a);
  });
  return result / arr.length;
}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
