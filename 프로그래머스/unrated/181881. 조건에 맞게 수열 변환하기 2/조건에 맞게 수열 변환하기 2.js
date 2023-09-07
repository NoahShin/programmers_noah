function solution(arr) {
    let count = 0;
    let prev = [...arr];
    while (true) {
         const next = prev.map((x) => {
        if (x >= 50 && x%2 === 0) {
             return x / 2
        } 
        if (x < 50 && x%2 === 1) {
            return 2 * x + 1
        }
        return x
        })
         
        const isEqual = prev.every((item, idx) => item === next[idx]);
        if (isEqual) break;
        prev = next;
        count++;
    }
    return count;   
}

