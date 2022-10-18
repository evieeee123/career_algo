// paired parentheses
// way 1 (using a counter)
// n = length of string
// Time: O(n)
// Space: O(1)
const pairedParentheses = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++;
        } else if (str[i] === ")") {
            count--;
            if (count < 0) return false
        }
    }
    return count === 0
};

// way 2 (same)
// const pairedParentheses = (str) => {
//     let count = 0;

//     for (let char of str) {
//         if (char === '(') {
//             count += 1;
//         } else if (char === ')') {
//             if (count === 0) {
//                 return false;
//             }

//             count -= 1;
//         }
//     }

//     return count === 0;
// };




// befitting brackets

// way 1 (using a stack: object)
// n = length of string
// Time: O(n)
// Space: O(n)
const befittingBrackets = (str) => {
    const stack = [];

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (char in brackets) {
            stack.push(brackets[char]);
        } else {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// way 2 (using a stack)

// const befittingBrackets = (str) => {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "(") {
//             stack.push(")")
//         } else if (str[i] === "{") {
//             stack.push("}")
//         } else if (str[i] === "[") {
//             stack.push("]")
//         } else if (stack.pop() !== str[i]) {
//             return false
//         }
//     }
//     return stack.length === 0;
// };




// decompress braces

// using a stack
// s = length of string
// m = count of brace pairs
// Time: O((9 ^ m) * s)
// Space: O((9 ^ m) * s)
const decompressBraces = (s) => {
    const nums = '123456789';
    const stack = [];
    for (let char of s) {
        if (nums.includes(char)) {
            stack.push(Number(char));
        } else {
            if (char === '}') {
                let segment = '';
                while (typeof stack[stack.length - 1] !== 'number') {
                    const popped = stack.pop();
                    segment = popped + segment;
                }
                const number = stack.pop();
                stack.push(repeat(segment, number));
            } else if (char !== '{') {
                stack.push(char);
            }
        }
    }

    return stack.join('');
};

const repeat = (str, n) => {
    let result = '';
    for (let i = 0; i < n; i += 1) {
        result += str;
    }
    return result;
};


