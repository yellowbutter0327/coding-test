const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

// 다른 사람의 풀이
function solution(date1, date2) {
  return date1.join("") - date2.join("") < 0 ? 1 : 0;
}
