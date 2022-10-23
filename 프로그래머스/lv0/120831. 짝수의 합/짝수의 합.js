// const solution = n => { 
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum
// }

const solution = n => {
    let half = n / 2 | 0
    return half * (half + 1)
}

// 만약 n 이하의 홀수를 모두 더한다면
//  const solution = n => {
//     let half = Math.ceil(n / 2);
//     return half * half
// }
