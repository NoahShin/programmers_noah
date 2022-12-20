function solution(my_string) {
    var answer = 0;
    my_string = my_string.split('')
    console.log(my_string)
    for (let i of my_string) {
      if (Number(i)) {
        answer += Number(i)
      }
    }
      
    return answer;
}