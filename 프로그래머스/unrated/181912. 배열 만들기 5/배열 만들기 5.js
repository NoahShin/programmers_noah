function solution(intStrs, k, s, l) {
    return intStrs.map((x)=> x.slice(s,l+s)).filter((x)=> Number(x) > k).map((x)=> Number(x))
}