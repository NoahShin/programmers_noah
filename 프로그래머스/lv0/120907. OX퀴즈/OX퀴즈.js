function solution(quiz) {
    const arr = [];
    quiz.forEach((x) => {
        const split = x.split('=')
        const left = split[0]
        const right = split[1]
        const result = eval(left)
        return result == Number(right) ? arr.push('O') : arr.push('X')
    })
    
    return arr;
}