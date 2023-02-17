function solution(k, m, score) {
    score.sort((a,b) => b-a)
   let res= 0;
   let idx = m -1;
   let len = Math.floor(score.length / m)
    for (let i =0; i< len; i++) {
        // const box = score.splice(0,m);
        res += score[idx]*m;
        idx += m
    }
    return res;
}