function solution(s) {
    const changeUpperToLowerCase = (idx,string)=>{
        return idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()
    }

    const answer = s.split(' ')
                    .map(sentence => sentence.split('').map((string,idx) => changeUpperToLowerCase(idx,string)).join('')).join(' ')
    return answer;
}