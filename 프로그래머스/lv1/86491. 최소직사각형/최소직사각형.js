function solution(sizes) {
   let arr = sizes.map(i => i.sort((a,b) => a-b));
   let leftMax = 0;
    let rightMax = 0;
   for (i of arr) {
       if (i[0] > leftMax) leftMax = i[0];
       if (i[1] > rightMax) rightMax = i[1]
   }
    return leftMax * rightMax;
}