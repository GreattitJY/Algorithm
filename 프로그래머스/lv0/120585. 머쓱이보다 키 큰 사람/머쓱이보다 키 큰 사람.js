function solution(array, height) {
    let answer = array.filter(x => (x > height)).length
    return answer;
}