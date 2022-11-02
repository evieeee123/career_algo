// subsets

// way 1 (recursive)
// n = length of elements array
// Time: ~O(2 ^ n)
// Space: ~O(2 ^ n)
const subsets = (elements) => {
    if (elements.length === 0) return [[]];
    let first = elements[0];
    let subsetsWithFirst = [];
    let subsetsWithoutFirst = subsets(elements.slice(1));
    for (let sub of subsetsWithoutFirst) {
        subsetsWithFirst.push([first, ...sub])
    }
    return [...subsetsWithFirst, ...subsetsWithoutFirst]
};

// way 2 (recursive)
// const subsets = (elements) => {
//     if (elements.length === 0) return [[]];

//     const ele = elements[0];
//     const remainingElements = elements.slice(1);
//     const subsetsWithoutEle = subsets(remainingElements);
//     const subsetsWithEle = subsetsWithoutEle.map((sub) => [ele, ...sub]);
//     return [...subsetsWithoutEle, ...subsetsWithEle];
// };





// permutations

// recursive
// n = length of items array
// Time: ~O(n!)
// Space: ~O(n!)
const permutations = (items) => {
    if (items.length === 0) return [[]];

    const first = items[0];
    const perms = permutations(items.slice(1));

    const fullPermutations = [];
    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i += 1) {
            fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    return fullPermutations;
};




// create combinations

// recursive
// n = length of items
// k = target length
// Time: ~O(n choose k)
// Space: ~O(n choose k)
// Note: "n Choose k" refers to the binomial coefficient.
const createCombinations = (items, k) => {
    if (items.length < k) return [];

    if (k === 0) return [[]];

    const first = items[0];
    const combosWithFirst = [];
    for (let combo of createCombinations(items.slice(1), k - 1)) {
        combosWithFirst.push([first, ...combo]);
    }

    const combosWithoutFirst = createCombinations(items.slice(1), k);
    return [...combosWithFirst, ...combosWithoutFirst];
};





// parenthetical possibilities

// way 1 (recursive)
// n = length of the string, m = length of largest parenthetical group
// Time: ~O(m ^ n)
// Space: ~O(m ^ n)
const parentheticalPossibilities = (s) => {
    if (s === "") return [""];

    const { remaining, chars } = getOptions(s);
    const suffixes = parentheticalPossibilities(remaining);
    const possibilities = [];

    for (let char of chars) {
        for (let suffix of suffixes) {
            possibilities.push(char + suffix);
        }
    }

    return possibilities;
};

const getOptions = (s) => {
    if (s[0] === "(") {
        const endIdx = s.indexOf(")");
        const remaining = s.slice(endIdx + 1);
        const chars = s.slice(1, endIdx).split("");
        return { remaining, chars };
    } else {
        const remaining = s.slice(1);
        const chars = [s[0]];
        return { remaining, chars };
    }
};

// way 2 (same)

// const parentheticalPossibilities = (s) => {
//     if (s.length === 0) return [""];

//     const { choices, reminder } = getOptions(s);
//     let res = [];
//     for (let choice of choices) {
//         const reminders = parentheticalPossibilities(reminder);
//         for (let sub of reminders) {
//             res.push(choice + sub)
//         }
//     }
//     return res;
// };

// const getOptions = (s) => {
//     if (s[0] === "(") {
//         const end = s.indexOf(")")
//         const choices = s.slice(1, end);
//         const reminder = s.slice(end + 1);
//         return { choices, reminder }
//     } else {
//         return {
//             choices: s[0],
//             reminder: s.slice(1)
//         }
//     }
// }





// substituting synonyms

// way 1 (recursive)
// n = number of words in sentence
// m = max number of synonyms for a word
// Time: ~O(m ^ n)
// Space: ~O(m ^ n)
const substituteSynonyms = (sentence, synonyms) => {
    const words = sentence.split(' ');
    const arrays = generate(words, synonyms);
    return arrays.map(subarray => subarray.join(' '));
};

const generate = (words, synonyms) => {
    if (words.length === 0) return [[]];

    const firstWord = words[0];
    const remainingWords = words.slice(1);
    if (firstWord in synonyms) {
        const result = [];
        const subarrays = generate(remainingWords, synonyms);
        for (let synonym of synonyms[firstWord]) {
            result.push(...subarrays.map(subarray => [synonym, ...subarray]));
        }
        return result;
    } else {
        const subarrays = generate(remainingWords, synonyms);
        return subarrays.map(subarray => [firstWord, ...subarray]);
    };
};

// way 2 (same)

// const substituteSynonyms = (sentence, synonyms) => {
//     let words = sentence.split(" ");
//     const subarrays = generate(words, synonyms);
//     const res = [];
//     for (let subarray of subarrays) {
//         res.push(subarray.join(" "))
//     }
//     return res;
// };

// const generate = (words, synonyms) => {
//     if (words.length === 0) return [[]];
//     let firstWord = words[0];
//     let reminding = words.slice(1);
//     const subarrays = generate(reminding, synonyms);
//     if (firstWord in synonyms) {
//         const res = [];
//         for (let synonym of synonyms[firstWord]) {
//             for (let subarray of subarrays) {
//                 res.push([synonym, ...subarray])
//             }
//         }
//         return res;
//     } else {
//         const res = [];
//         for (let subarray of subarrays) {
//             res.push([firstWord, ...subarray])
//         }
//         return res;
//     }
// }