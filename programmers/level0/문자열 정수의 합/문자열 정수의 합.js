function solution(num_str) {
  let num = 0;
  let arr = num_str.split("");
  for (let i = 0; i < arr.length; i++) {
    num += Number(arr[i]);
  }
  return num;
}
