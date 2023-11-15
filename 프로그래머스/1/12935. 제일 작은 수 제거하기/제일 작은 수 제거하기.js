function solution(arr) {
    
    
    const min = Math.min(...arr)
    const aa = arr.filter((item)=> item !== min)
    
    return aa.length > 0 ? aa : [-1]
}