function solution(q, r, code) {
    const arr = [...code]
    let aa= []
    arr.map((x,i) => {
        if (i%q == r) {
            aa.push(x)
        }
    })
    return aa.join('')
}