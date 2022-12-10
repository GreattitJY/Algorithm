
const solution = (arr, n) => {
  arr = [...arr, n].sort((a,b) => a -b);
  let i = arr.indexOf(n)
  if (!i) {
    return arr[1]
  } else if (i === arr.length -1) { 
    return arr[i - 1]
  }
  return arr[i] - arr[i - 1] <= arr[i + 1] - arr[i] ? arr[i -1] : arr[i + 1]
}
console.log(solution([3,10,28],20))
console.log(solution([2,5,4],3))