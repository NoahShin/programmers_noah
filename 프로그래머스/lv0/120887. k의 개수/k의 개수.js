function solution(i, j, k) {
    let count = 0;
    for (let a = i; a <=j; a++) {
        String(a).split('').map((x) => {
            if (x === String(k)) {
                count++
            }})}
    
    return count;
}