function solution(n, t) {
  return n * Math.pow(2, t);
}

//세균 증식
function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}
