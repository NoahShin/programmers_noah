function solution(phone_number) {
    const lastFour = phone_number.slice(-4)
    const front = phone_number.slice(0,-4)
    const a = '*'
    return a.repeat(front.length) + lastFour
}