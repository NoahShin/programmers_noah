function solution(array) {
    var answer = 0;
    for (let i of array) {
      i = i.toString()
      console.log(i)
      i = i.split('')
      console.log(i)
     
        for (let k of i) {
          if (k == '7') {
            answer++
          }
        
      }
    }
    return answer;
}
