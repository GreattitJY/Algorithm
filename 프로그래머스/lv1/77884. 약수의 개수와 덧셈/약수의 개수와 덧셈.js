function solution(left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        let num = 1;
        let count = 0;
        while(num !== i) {
            if (i % num === 0) count++;
            num++
        }
        if (count % 2) {
            arr.push(i)
        } else arr.push(-i)
    }
   return  arr.reduce((a,c) => a+c, 0)
}