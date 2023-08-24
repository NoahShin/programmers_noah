function solution(myString) {
    return [...myString].map((x)=> x === 'a' ? x.toUpperCase() : x !== 'A' ? x.toLowerCase() : x).join('')
}


// 나 바본가..
// const solution=s=>s.toLowerCase().replaceAll('a','A');
