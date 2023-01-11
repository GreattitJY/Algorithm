function solution(absolutes, signs) {
 let res = 0;
 for (const [i,v] of signs.entries()){
     if (v === false) {
         res -= absolutes[i];
     } else res += absolutes[i];
 }
    return res;
}