function solution(n) {
    // return Number([...String(n)].map(x=>Number(x)).sort((a,b)=>b-a).join(''))
    let arr =[];
    do {
        arr.push((n%10))
        n = Math.floor(n/10)
    } while (n>0)
    return arr.sort((a,b)=>b-a).join('')*1
}