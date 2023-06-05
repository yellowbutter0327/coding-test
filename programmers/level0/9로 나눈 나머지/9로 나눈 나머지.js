function solution(number) {
  let arr = [...number];
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += Number(arr[i]);
  }
  return a % 9;
}
