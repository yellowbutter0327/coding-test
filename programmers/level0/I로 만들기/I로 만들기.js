function solution(myString) {
  let arr = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] < "l") {
      arr += "l";
    } else {
      arr += myString[i];
    }
  }
  return arr;
}

//다른 사람의 풀이
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}
