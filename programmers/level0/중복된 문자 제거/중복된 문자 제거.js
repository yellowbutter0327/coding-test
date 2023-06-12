function solution(my_string) {
  let copy = [...my_string];
  let copy2 = new Set(copy);
  let copy3 = [...copy2];
  return copy3.join("");
}
