function solution(my_string, n) {
    let answer = '';
     answer = [...my_string].map(a => a.repeat(n)).join("")
    return answer
}