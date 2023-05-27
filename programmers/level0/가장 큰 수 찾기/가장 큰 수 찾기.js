function solution(array) {
  let num = 0;
  let a = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === a) {
      num = i;
    }
  }
  return [a, num];
}

//다른 사람 풀이
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
