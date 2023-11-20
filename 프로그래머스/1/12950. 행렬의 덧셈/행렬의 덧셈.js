function solution(arr1, arr2) {
    return arr1.map((rows,rowIdx)=>rows.map((num,colIdx)=> num + arr2[rowIdx][colIdx]))
    
}