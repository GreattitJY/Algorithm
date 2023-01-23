function solution(nums) {
     let len = Math.floor(nums.length / 2);
     let arr = [...new Set(nums)]
    return arr.length >= len ? len : arr.length    
}