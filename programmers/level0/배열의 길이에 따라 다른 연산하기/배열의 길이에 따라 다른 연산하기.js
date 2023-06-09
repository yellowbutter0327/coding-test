function solution(arr, n) {
  let arr2 = [];
  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        arr2.push(arr[i] + n);
      } else {
        arr2.push(arr[i]);
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr2.push(arr[i] + n);
      } else {
        arr2.push(arr[i]);
      }
    }
  }
  return arr2;
}
