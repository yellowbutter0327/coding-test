function solution(arr, intervals) {
  let arr3 = arr.slice(intervals[0][0], intervals[0][1] + 1);
  let arr4 = arr3.concat(arr.slice(intervals[1][0], intervals[1][1] + 1));
  return arr4;
}
