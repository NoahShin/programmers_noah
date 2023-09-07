function solution(numbers) {
    const arr = [...numbers]
    const strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let str = ''
    let answer = ''
    arr.forEach((x) => {
        str += x
        
        const aa = strings.find((y) => str == y)
        if (aa != undefined) {
            
            answer += strings.indexOf(aa)
            str = ''
        }
    })
    return Number(answer)
}