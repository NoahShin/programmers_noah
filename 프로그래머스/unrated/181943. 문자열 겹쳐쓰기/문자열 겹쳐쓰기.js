function solution(str, o, s) {
    const slice = str.slice(s,o.length)
    const a = str.slice(0,s)
    const b = str.slice(s+o.length)
    
    return a+o+b

}