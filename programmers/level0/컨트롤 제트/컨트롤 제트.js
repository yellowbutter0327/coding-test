function solution(s) {
  let start = 0;
  let a = s.split(" ");
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "Z") {
      start -= Number(a[i - 1]);
    } else start += Number(a[i]);
  }
  return start;
}
