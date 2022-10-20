function solution(n) {
    var answer = n.toString().split('').map(x => parseInt(x,10)).reduce((pre,cur) => pre+cur,0)
    return answer;
}