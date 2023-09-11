function solution(l, r) {
    var answer = [];
    for (let i = l; i <=r; i++) {
        if ([...String(i)].every((x) => x.includes('5') || x.includes('0'))) {
            answer.push(i)
        }
    }
    return answer.length ? answer : [-1]
    
}