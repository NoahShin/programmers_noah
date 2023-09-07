function solution(my_string) {
    const arr = my_string.split(' ')
    // return arr[1] == '+' ? Number(arr[0]) + Number(arr[2]) : Number(arr[0]) - Number(arr[2])
    console.log(arr)
    const first = Number(arr[0])
    const plus = arr.filter((x,i) =>  arr[i-1] === '+').map(x => Number(x)).reduce((acc,cur) => acc += cur, 0)
    console.log(plus)
    const minus = arr.filter((x,i) =>  arr[i-1] === '-').map(x => Number(x)).reduce((acc,cur) => acc += cur, 0)
    
    return first + plus - minus
}