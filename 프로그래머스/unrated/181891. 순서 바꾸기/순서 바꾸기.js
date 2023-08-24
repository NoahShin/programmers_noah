function solution(list, n) {
    const afterIdx = list.splice(n)
    return [...afterIdx, ...list]
}