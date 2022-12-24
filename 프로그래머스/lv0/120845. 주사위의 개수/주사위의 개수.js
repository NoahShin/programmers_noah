const solution = (box, n) => box.map(x => x / n << 0).reduce(( acc, i ) => acc * i, 1)
