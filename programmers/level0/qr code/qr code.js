function solution(q, r, code) {
  let arr = [];
  let copy = [...code];
  for (let i = 0; i < copy.length; i++) {
    if (i % q === r) {
      arr.push(copy[i]);
    }
  }
  return arr.join("");
}
