function solution(age) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alpha[age[i]];
  }
  return answer;
}

// 다른 사람의 풀이
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
