function solution(n) {
    var answer = 0;
    answer = n/7 
    if(!Number.isInteger(answer)) {
      answer++
      answer = ~~answer
    }
    return answer;
}