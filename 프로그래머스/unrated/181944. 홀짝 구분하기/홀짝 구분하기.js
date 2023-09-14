const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 입력값을 정수로 변환합니다.
    const n = Number(input[0]);

    // n을 2로 나눈 나머지를 계산하여 짝수인지 홀수인지 판별합니다.
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
});