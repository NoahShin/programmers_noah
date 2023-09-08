function solution(spell, dic) {
    const isSameExist = dic.filter(str=>str.length === spell.length).some((str)=>{
        const isSame = spell.every(s=>{
            return str.includes(s)
        })
        return isSame
    })

    return isSameExist ? 1 : 2
}

// 와.. sort() 쓰면 다 돌 필요 없었네...
// function solution(p, d) {
//     return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }