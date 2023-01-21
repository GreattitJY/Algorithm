function solution(array, commands) {
    let answer = [];
    for ([a,b,c] of commands) {
        let arr = array.slice(a - 1,b).sort((a,b) => a-b)
        answer.push(arr[c-1])
    }
    return answer;
}