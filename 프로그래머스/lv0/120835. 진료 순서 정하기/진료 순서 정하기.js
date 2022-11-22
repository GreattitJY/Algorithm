function solution(arr) {
   return arr.map(item => [...arr].sort((a, b) => b-a).indexOf(item) + 1)
}