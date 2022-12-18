function solution(price) {

    var answer = 0;
    if (price < 100000) {
        return price
    }
    if (price >= 100000 && price < 300000) {
        return answer = Math.floor(price * .95)
    } 
    if (price >= 300000 && price < 500000) {
        return answer = Math.floor(price * .90)
    }
    if (price >= 500000) {
        return answer = Math.floor(price * .80)
    }
    return answer;
}