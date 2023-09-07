function solution(s) {
    const arr = s.split(' ')
    
    return arr.reduce((acc,cur,idx) => {
      
        if (cur != 'Z') {
            return acc += Number(cur)
        } else {
            return acc -= arr[idx-1]
        }
    }, 0)
}
