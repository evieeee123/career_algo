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



// anagrams
// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n)

// way 1
const anagrams = (s1, s2) => {
    const count = {};
    for (let char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

    for (let char of s2) {
        if (count[char] === undefined) {
            return false;
        } else {
            count[char] -= 1;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};

// way 2
// const anagrams = (s1, s2) => {
//     let hash = {};
//     if (s1.length !== s2.length) return false;
//     for (let i = 0; i < s1.length; i++) {
//         if (!hash[s1[i]]) hash[s1[i]] = 1
//         else hash[s1[i]]++
//     }
//     for (let i = 0; i < s2.length; i++) {
//         if (hash[s2[i]]) hash[s2[i]]--;
//         else return false;
//     }
//     for (let key in hash) {
//         if (hash[key] !== 0) return false;
//     }
//     return true
// };




// most frequent char
// n = length of string
// Time: O(n)
// Space: O(n)
// using hashmap(object)

// way 1
const mostFrequentChar = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1
    }

    let best = null;
    for (let char of s) {
        if (best === null || count[char] > count[best]) {
            best = char;
        }
    }
    return best;
};

// way 2
// const mostFrequentChar = (s) => {
//     let hash = {};
//     for (let char of s) {
//         if (!hash[char]) hash[char] = 1
//         else hash[char]++
//     }
//     let curr = s[0]
//     for (let char of s) {
//         if (hash[char] > hash[curr]) {
//             curr = char
//         }
//     }
//     return curr
// };




// pair sum
// n = length of array
// Time: O(n)
// Space: O(n)
// using a hashmap(object)

// way 1
const pairSum = (numbers, targetSum) => {
    let hash = {}
    for (let i = 0; i < numbers.length; i++) {
        if (hash[numbers[i]] === undefined) {
            hash[targetSum - numbers[i]] = i
        } else {
            return [hash[numbers[i]], i]
        }
    }
};

// way 2
// const pairSum = (numbers, targetSum) => {
//     const previousNums = {};
//     for (let i = 0; i < numbers.length; i += 1) {
//         const num = numbers[i];
//         const complement = targetSum - num;
//         if (complement in previousNums) return [i, previousNums[complement]];

//         previousNums[num] = i;
//     }
// };




// pair product
const pairProduct = (numbers, targetProduct) => {
    let hash = {}
    for (let i = 0; i < numbers.length; i++) {
        let nums = targetProduct / numbers[i]
        if (hash[numbers[i]] === undefined) {
            hash[nums] = i
        } else {
            return [hash[numbers[i]], i]
        }
    }
};



// intersection

// way 1 (brute force (timeout))
// n = length of array a, m = length of array b
// Time: O(n * m)
// Space: O(min(n, m))
const intersection = (a, b) => {
    const result = [];
    for (let item of b) {
        if (a.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// way 2 (using set (pass))
// n = length of array a, m = length of array b
// Time: O(n + m)
// Space: O(n)

// const intersection = (a, b) => {
//     const result = [];
//     const setA = new Set(a);
//     for (let item of b) {
//         if (setA.has(item)) {      //set.has is O(1)
//             result.push(item);
//         }
//     }
//     return result;
// };

// ***
// // const setA = new Set(a); => same as
// // const setA = new Set();
// // for (let item of a) {
// //     setA.add(item)                     //set.add is O(1)
// // }

// way 3 (using hashmap)
// const intersection = (a, b) => {
//     let hash = {};
//     let res = [];
//     for (let num of a) {
//         if (!hash[num]) hash[num] = 1;
//     }
//     for (let num of b) {
//         if (hash[num]) res.push(num)
//     }
//     return res
// };
