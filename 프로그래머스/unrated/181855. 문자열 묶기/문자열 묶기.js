function solution(strArr) {
    const map = new Map();
    const aa = []
    for (const a of strArr) {
        if (map.has(a.length)) {
            map.set(a.length, map.get(a.length) + 1);
        } else {
            map.set(a.length, 1);
        }
    }
    for (const [key, value] of map) {
    aa.push(value)
    }
    return aa.sort((a,b) => a - b)[aa.length-1]
}
