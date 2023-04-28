function solution(absolutes, signs) {
  let arr = [];
  let b = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      arr.push(1);
    } else arr.push(-1);
  }

  for (let j = 0; j < arr.length; j++) {
    b += absolutes[j] * arr[j];
  }
  return b;
}

// 다른 풀이
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
