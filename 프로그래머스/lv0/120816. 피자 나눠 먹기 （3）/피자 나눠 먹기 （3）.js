function solution(slice, n) {
    var answer = 0;
     answer = n / slice 
  console.log(answer)
    if (!Number.isInteger(answer)) {
        answer++
    }
     answer =  ~~answer;
  console.log(answer)
    
    return answer;
}