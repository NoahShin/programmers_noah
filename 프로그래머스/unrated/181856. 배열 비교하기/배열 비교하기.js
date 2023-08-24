function solution(arr1, arr2) {
    if (arr1.length < arr2.length) return -1 
    if (arr1.length > arr2.length) return 1
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    return arr1Sum === arr2Sum ? 0 : arr1Sum < arr2Sum ? -1 : 1

}