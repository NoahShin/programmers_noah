function solution(arr, query) {
    query.forEach((x,idx)=>{
        arr = idx % 2 === 0 ? arr.slice(0,x+1) : arr.slice(x)
    })
    return arr
}