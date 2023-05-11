function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

//다른 사람의 풀이
function solution(rny_string) {
  let arr = rny_string.split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "m") {
      str += "rn";
    } else {
      str += arr[i];
    }
  }
  return str;
}
