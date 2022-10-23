function solution(babbling) {
  let res = 0;
  babbling.forEach(word => {
      if (word.replace(/(aya|ye|woo|ma)/g, '') === '' && 
         !word.match(/(ayaaya|yeye|woowoo|mama)/g)) 
          res++;
  })
      return res
}



