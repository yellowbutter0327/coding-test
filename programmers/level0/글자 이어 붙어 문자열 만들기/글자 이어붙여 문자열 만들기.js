function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}

//다른 사람의 풀이
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
