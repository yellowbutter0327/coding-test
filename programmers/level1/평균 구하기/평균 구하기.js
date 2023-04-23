function solution(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  let b = a / arr.length;
  return b;
}
