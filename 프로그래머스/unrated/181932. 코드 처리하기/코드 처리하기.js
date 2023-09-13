function solution(code) {
    var a = '';
    let mode = 0;
    [...code].forEach((x,idx) => {
        if (mode==0) {
            if (x == 1) mode = 1;
            else if ( x != 1 && idx % 2 ==0) {
                a = a+x
            }
        } else {
            if (x == 1) mode = 0;
            else if (x != 1 && idx % 2 ==1 ) {
                a = a+x
            }
        }
    })
    return a.length ? a : "EMPTY"

}