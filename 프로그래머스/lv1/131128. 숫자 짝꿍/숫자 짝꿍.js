function solution(X, Y) {
  const res = [];
  const obj = {};

  for (const i of X) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (const i of Y) {
    if (obj[i]) {
      res.push(i);
      obj[i]--;
    }
  }

  res.sort((a, b) => b - a);

  if (!res.length) return "-1";
  else if (res[0] === "0") return "0";
  return res.join("");
}