function solution(myString, pat) {
  let arr = [...myString];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr[i] = "B";
    } else {
      arr[i] = "A";
    }
  }
  if (arr.join("").includes(pat)) {
    return 1;
  } else {
    return 0;
  }
}

// 다른 사람의 풀이
const solution = (myString, pat) =>
  [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
