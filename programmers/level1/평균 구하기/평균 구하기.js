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

//reduce (a,b,c) c가 오느냐 안 오느냐에 따라 index가 0으로 시작하냐 1로 시작하느냐가 바뀐다.
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
