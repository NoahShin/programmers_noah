function solution(my_strings, parts) {
    return parts.reduce((acc, cur, idx) => {
        const [s,e] = cur
        
        acc += my_strings[idx].slice(s, e + 1)
        return acc
    }, '')
}