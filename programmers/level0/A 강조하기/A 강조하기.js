function solution(myString) {
  let a = [];
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "a") {
      a.push("A");
    } else if (myString[i] === "A") {
      a.push("A");
    } else {
      a.push(myString[i].toLowerCase());
    }
  }
  return a.join("");
}
