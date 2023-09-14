const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const aa =[...str].map((x) => {
        if (x.toUpperCase() == x) {
            return x.toLowerCase()
        } else {
            return x.toUpperCase()
        }
    })
    
    console.log(aa.join(''))
});