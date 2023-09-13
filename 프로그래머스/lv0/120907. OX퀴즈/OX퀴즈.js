function solution(quiz) {
    return quiz.map((x) => {
        const split = x.split('=')
        const [left, right] = [split[0], split[1]]
        const result = eval(left)
        return result == Number(right) ? 'O' : 'X'
    })
}