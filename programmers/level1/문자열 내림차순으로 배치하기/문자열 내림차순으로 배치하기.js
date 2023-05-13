function solution(s) {
  let answer = s.split("").sort().reverse().join("");
  return answer;
}

//다른 사람 풀이
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}
