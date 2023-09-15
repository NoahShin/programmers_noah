function solution(s){
    const low = s.toLowerCase()
    let p = 0, y=0;
    for (let i=0; i<low.length;i++) {
        if (low[i] == 'p') p++ 
        if (low[i] == 'y') y++ 
    }
    return (p == y) ? true : false
}