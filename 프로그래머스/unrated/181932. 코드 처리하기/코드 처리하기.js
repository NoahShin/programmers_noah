function solution(code) {
    var a = '';
    let mode = 0;
    [...code].forEach((x,idx) => {
        if (Number(x) === 1) mode = mode === 1 ? 0 : 1;
        if (Number(x) !== 1 && idx % 2 === mode) a += x;
    })
    return a.length ? a : "EMPTY"

}
