function solution(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i - 1] === undefined) {
            a[i - 1] = 0;
            console.log(a[i-1])
        } else if (a[i + 1] === undefined) {
            a[i + 1] = 0;
        }

        a[i] = a[i - 1] + a[i] + a[i + 1];
    }
    return a
}

console.log(solution([4, 0, 1, -2, 3]))