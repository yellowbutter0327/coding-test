function solution(todo_list, finished) {
  let arr = [];
  let arr2 = [];
  for (let j = 0; j < finished.length; j++) {
    if (finished[j] === false) {
      arr.push(j);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr2.push(todo_list[arr[i]]);
  }
  return arr2;
}

//다른 사람의 풀이

function solution(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}
