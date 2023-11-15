function solution(n) {
    const a = '수박';
    
    if (n % 2) {
        return a.repeat(Math.ceil(n/2)).slice(0,-1)
    } else {
        return a.repeat(Math.ceil(n/2))
    }

}