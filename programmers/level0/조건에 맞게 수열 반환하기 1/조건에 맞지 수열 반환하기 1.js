function solution(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      arr2.push(arr[i] / 2);
    } else if (arr[i] < 50 && arr[i] % 2 === 1) {
      arr2.push(arr[i] * 2);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
