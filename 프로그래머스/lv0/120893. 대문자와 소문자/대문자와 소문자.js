function solution(my_string) {
    var answer = '';
    // let arr = my_string.split('')
    
    for (let i of my_string) {
        if (isUpperCase(i)) {
            answer += i.toLowerCase()
        } else {
            answer += i.toUpperCase()
        }
    }
    
    return answer;
}

function isUpperCase (input) {  
  return input === String(input).toUpperCase()
}