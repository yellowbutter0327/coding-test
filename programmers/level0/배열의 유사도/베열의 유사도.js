function solution(s1, s2) {
  let a = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        a += 1;
      }
    }
  }
  return a;
}

//다른 사람의 풀이
function solution(s1, s2) {
  return s1.length + s2.length - [...new Set([...s1, ...s2])].length;
}
