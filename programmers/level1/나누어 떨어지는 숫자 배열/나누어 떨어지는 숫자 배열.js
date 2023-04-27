function solution(arr, divisor) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      arr1.push(arr[i]);
    }
  }
  if (arr1.length === 0) {
    return [-1];
  } else {
    return arr1.sort((a, b) => a - b);
  }
}
