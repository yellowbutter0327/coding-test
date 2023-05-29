function solution(arr) {
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
}

//다른 사람의 풀이
function solution(arr) {
  return arr.join("");
}
