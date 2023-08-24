function solution(a, b) {
    const add = Number(`${a}${b}`)
    const multiply = 2 * a * b
    return Math.max(add,multiply)
}