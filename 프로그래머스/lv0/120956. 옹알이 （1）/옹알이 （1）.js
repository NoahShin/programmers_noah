

function solution(babbling) {
    let baby = ["aya", "ye", "woo", "ma"];
    let word = "";
    let answer = 0;

    for(let i = 0; i < babbling.length; i++) {
        word = babbling[i]
        for(let j = 0; j < baby.length; j++) {
            word = word.replaceAll(baby[j], ' ');    
        }
        if( word.trim().length == 0) {
            answer++;
        }
    }
    return answer;
}
