function solution(numbers) {
  let arr = [];
  let b = 0;
  for (let i = 0; i <= 9; i++) {
    if (numbers.includes(i) === false) {
      arr.push(i);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    b += arr[j];
  }
  return b;
}

// 다시 푼 풀이
function solution(numbers) {
  let a = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) a += i;
  }
  return b;
}
