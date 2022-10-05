//Uncompress
// n = # of groups
// m = max number for any group
// time complexity: O(nm)
// space complexity: O(nm)
// using 2 pointers

// way 1
const uncompress = (s) => {
    let res = ""
    let number = '0123456789';
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (number.includes(s[j])) {
            j++;
        } else {
            let nums = Number(s.slice(i, j));
            for (let count = 0; count < nums; count++) {
                res += s[j]
            }
            j++;
            i = j;
        }
    }
    return res
};

// way 2
// const uncompress = (s) => {
//     let result = [];
//     const numbers = '0123456789';
//     let i = 0;
//     let j = 0;
//     while (j < s.length) {
//         if (numbers.includes(s[j])) {
//             j += 1;
//         } else {
//             const num = Number(s.slice(i, j));
//             for (let count = 0; count < num; count += 1) {
//                 result.push(s[j]);
//             }
//             j += 1;
//             i = j;
//         }
//     }
//     return result.join('');
// };




// Compress
// n = length of string
// Time: O(n)
// Space: O(n)
// using 2 pointers

// way 1 (time: O(n^2))
const compress = (s) => {
    let res = "";
    let i = 0;
    let j = 0;
    let count = 0;
    for (let i = 0; i <= s.length; i++) {    //O(n)
        let char = s[j];
        if (s[i] === char) {
            count++;
        } else {
            if (count > 1) {
                res += count                 //O(n)
            }
            res += s[j]
            j = i;
            count = 1;
        }
    }
    return res
};

// way 2 (time: O(n))
// const compress = (s) => {
//     let res = [];
//     let i = 0;
//     let j = 0;
//     while (j <= s.length) {
//         if (s[i] === s[j]) {
//             j += 1;
//         } else {
//             num = j - i;
//             if (num === 1) {
//                 res.push(s[i])         //O(1)
//             } else {
//                 res.push(num, s[i])   //O(1)
//             }
//             i = j;
//         }
//     }
//     return res.join("")
// };




