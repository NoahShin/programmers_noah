function solution(order) {
    let total = 0;
    order.forEach((x) => {
        if (x.includes('americano') || x == 'anything') {
            total += 4500
        }
        if (x.includes('latte')) total += 5000
    })
    
    return total
}