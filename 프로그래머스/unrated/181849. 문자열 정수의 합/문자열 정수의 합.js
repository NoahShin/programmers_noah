function solution(num_str) {
    var answer = 0;
    const answerr = num_str.split('').map((item) => answer += Number(item))
    return answer;
}