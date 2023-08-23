function solution(num_list) {
    const odd = num_list.filter((item) => {
        if (item % 2 !== 0) {
            return String(item)
        } else { return; }
    })
    
    const even = num_list.filter((item) => {
        if (item % 2 === 0) {
            return String(item)
        } else { return; }
    })
    return Number(odd.join('')) + Number(even.join(''))
}