function solution(num1, num2) {
  let answer = parseInt((num1 / num2) * 1000);
  return answer;
}

//다른 사람의 풀이
const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);
