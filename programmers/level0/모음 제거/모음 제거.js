function solution(my_string) {
  let arr = [];

  [...my_string].filter((a) => {
    if (a !== "a" && a !== "e" && a !== "i" && a !== "o" && a !== "u") {
      arr.push(a);
    }
  });

  return arr.join("");
}

//다른 사람 풀이
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
