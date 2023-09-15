function solution(x) {
    const aa = String(x).split('').reduce((acc,cur)=> acc += Number(cur),0)
    return (x % aa == 0) ? true : false
 
}