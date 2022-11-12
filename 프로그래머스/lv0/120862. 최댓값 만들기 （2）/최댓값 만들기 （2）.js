
function solution(numbers) {
    let arr = numbers.sort((a,b) => b-a)
    let res1, res2
    
    res1 = arr[0]*arr[1]
    res2 = arr[arr.length - 1] * arr[arr.length - 2]
    return res1 > res2? res1 : res2;
}