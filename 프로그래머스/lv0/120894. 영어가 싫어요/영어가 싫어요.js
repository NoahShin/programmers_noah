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


// 콜백 인자
// function solution(numbers) {
//     const obj = {
//         zero: 0, one: 1, two: 2, three: 3, four: 4,
//         five: 5, six: 6, seven: 7, eight: 8, nine: 9
//     };

//     const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
//         return obj[v];
//     });

//     return Number(num);
// }