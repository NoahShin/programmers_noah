function solution(rank, at) {
    const r = rank.filter((x,i) => at[i] == true).sort((a,b) => a-b).slice(0,3).map((x) => rank.indexOf(x))
    
    return r[0] * 10000 + 100 * r[1] + r[2]
}