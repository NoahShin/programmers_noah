function solution(num_list) {
    const even = num_list.reduce((acc,cur, idx) => {
        if (idx % 2 === 0) {
            return acc + cur
        }
        return acc
    }, 0)
    
    const odd = num_list.reduce((acc,cur, idx) => {
        if (idx %2 !==0) {
            return acc + cur
        }
        return acc
    }, 0)
    
    return Math.max(even,odd)
}