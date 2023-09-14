function solution(x, n) {
    var answer = [];
    let cnt = 1;
    for (let i = x; cnt<=n; i +=x) {
        answer.push(i)
        cnt++
    }
    return answer
    
}