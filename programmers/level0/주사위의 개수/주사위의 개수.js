function solution(box, n) {
  let arr = 1;
  for (let i = 0; i < box.length; i++) {
    arr *= Math.floor(box[i] / n);
  }
  return arr;
}
