function solution(array) {
    const numObj = {0:0}
    for (let i of array) {
        numObj[i] = numObj[i] ? ++numObj[i] : 1
    }
    const max = Math.max(...Object.values(numObj))
    let index = 0
    
    if(Object.values(numObj).filter(a => a === max).length !== 1) {
        return -1
    } else {
        Object.values(numObj).forEach((a,i) => a === max ? index=i : null)
    }
  
    return Number(Object.keys(numObj)[index]);
}
