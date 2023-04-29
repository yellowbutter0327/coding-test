function solution(s) {
  const arr = [...s];
  if (arr.length % 2 === 0) {
    return arr[arr.length / 2 - 1] + arr[arr.length / 2];
  } else {
    return arr[(arr.length - 1) / 2];
  }
}

// 다른 풀이
function solution(s) {
  let num = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.substr(num - 1, 2);
  } else {
    return s.substr(num, 1);
  }
}
