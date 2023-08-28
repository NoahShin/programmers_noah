function solution(my_string) {
    const aa = new Set(my_string.split(''))
    return [...aa].join('')
}