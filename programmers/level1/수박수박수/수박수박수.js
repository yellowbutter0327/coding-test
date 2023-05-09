function solution(n) {
  let arr = "수박";
  if (n % 2 === 0) {
    return arr.repeat(n / 2);
  } else return arr.repeat(n / 2) + arr[0];
}

// 다른 사람 풀이
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
