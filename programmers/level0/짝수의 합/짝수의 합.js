function solution(n) {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      a += i;
    }
  }
  return a;
}

//다른 사람의 풀이

2;
3;
4;
5;
6;
7;
8;
9;
function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i += 2) answer += i;

  return answer;
}
