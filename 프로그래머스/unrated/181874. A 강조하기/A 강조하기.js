function solution(myString) {
    return [...myString].map((x)=> x === 'a' ? x.toUpperCase() : x !== 'A' ? x.toLowerCase() : x).join('')
}