function solution(chicken) {
    let answer = 0;
    let rest = 0;
    while (chicken > 1) {
        answer += parseInt(chicken / 10);
        rest += chicken % 10;
        chicken = chicken / 10;
    }
    answer += parseInt(rest / 10);
    return answer;
}