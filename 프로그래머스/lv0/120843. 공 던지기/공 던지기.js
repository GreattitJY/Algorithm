const solution = (n, k) => {
  let arr = [];
  for (i = 0; i < k; i++) {
    arr = arr.concat(n);
  }
  return arr[(k-1)*2]
} 
