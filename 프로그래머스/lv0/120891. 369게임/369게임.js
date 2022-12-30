function solution(order) {
    var answer = 0;
    order.toString().split('').map(x => {if (x == 3 || x == 6 || x == 9) answer++}) 
    return answer;
}