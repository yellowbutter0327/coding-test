function solution(my_string) {
  let str = [...my_string];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      arr.push(str[i].toLowerCase());
    } else {
      arr.push(str[i].toUpperCase());
    }
  }
  return arr.join("");
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}
