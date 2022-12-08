function solution(id_pw, db) {
    let flag = false;
   for (item of db) {
       if (item[0] === id_pw[0]) {
            if (item[1] === id_pw[1]) {
               return "login"
            } else {
                flag = true                
            }
       } 
   }
    if (flag) {
        return "wrong pw"
    } else {
        return "fail"
    }
}