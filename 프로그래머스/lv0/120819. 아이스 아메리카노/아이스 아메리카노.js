function solution(money) {
    var answer = [];
    let result = parseInt(money / 5500)
    let total = result * 5500
    let left = money - total
    answer.push(result, left)
    return answer;
}
