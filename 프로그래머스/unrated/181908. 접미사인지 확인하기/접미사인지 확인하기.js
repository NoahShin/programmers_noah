function solution(my_string, is_suffix) {
    const suffixLength = is_suffix.length
    const cutByMyString = my_string.slice(-suffixLength)
    return cutByMyString === is_suffix ? 1 : 0
}

// const solution = (str, suff) => str.endsWith(suff) ? 1 : 0
