function solution(numbers, n) {
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i];
    if (a > n) {
      return a;
    }
  }
}

//다른 사람의 풀이
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
