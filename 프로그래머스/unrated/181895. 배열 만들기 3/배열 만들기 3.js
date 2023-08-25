function solution(arr, intervals) {
    const a = arr.slice(intervals[0][0],intervals[0][1]+1)
    console.log(a)
    console.log(arr)
    const b = arr.slice(intervals[1][0],intervals[1][1]+1)
    return [...a,...b]
}