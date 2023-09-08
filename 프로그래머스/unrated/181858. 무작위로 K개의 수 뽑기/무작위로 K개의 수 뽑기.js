function solution(arr, k) {
    const uniArr = [...new Set(arr)]
    if (uniArr.length > k) {
        return uniArr.slice(0,k)
    } else {
         const diff = k - uniArr.length
        const rest = new Array(diff).fill(-1)
        return [...uniArr, ...rest]
    }
}