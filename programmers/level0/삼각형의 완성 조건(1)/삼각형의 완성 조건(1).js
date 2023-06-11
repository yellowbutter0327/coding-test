function solution(sides) {
  let copy = [...sides];
  copy.sort((a, b) => b - a);
  if (copy[0] < copy[1] + copy[2]) {
    return 1;
  } else return 2;
}
