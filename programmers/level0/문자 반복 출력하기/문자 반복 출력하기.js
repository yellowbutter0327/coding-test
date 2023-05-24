function solution(my_string, n) {
  let arr = [];
  let code1 = my_string.split("");
  for (let i = 0; i < code1.length; i++) {
    arr.push(code1[i].repeat(n));
  }
  return arr.join("");
}

// 다른 사람 풀이
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}
