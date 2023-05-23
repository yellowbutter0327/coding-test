function solution(str_list, ex) {
  let arr = [];
  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      arr.push(str_list[i]);
    }
  }
  return arr.join("");
}

// 다른 사람의 풀이
const solution = (str_list, ex) =>
  str_list.filter((v) => !v.includes(ex)).join("");
