function solution(number) {
    let res = 0;
    let len = number.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++){
               let sum = number[i] + number[j] + number[k]
               if (!sum) res++;
            }
        }
    }
    return res
}