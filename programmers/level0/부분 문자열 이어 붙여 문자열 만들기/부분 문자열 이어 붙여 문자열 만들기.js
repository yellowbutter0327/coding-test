function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}

//다른 사람 풀이
function solution(my_strings, parts) {
  var answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i]
      .split("")
      .slice(parts[i][0], parts[i][1] + 1)
      .join("");
  }
  return answer;
}
