function solution(score) {
  let arr = [];
  for (i of score) {
    let sum = i[0] + i[1];
    arr.push(sum);
  }
  let arr2 = [...arr].sort((a, b) => b - a);
  return arr.map(i => arr2.indexOf(i) + 1)
}