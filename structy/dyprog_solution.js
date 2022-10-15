// overlap subsequence

// dynamic programming with memoization
// n = length of str1
// m = length of str2
// Time: O(nm)
// Space: O(nm)
const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
    const key = i + ',' + j;
    if (key in memo) return memo[key];

    if (i === str1.length || j === str2.length) return 0;

    if (str1[i] === str2[j]) {
        memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
    } else {
        memo[key] = Math.max(
            overlapSubsequence(str1, str2, i + 1, j, memo),
            overlapSubsequence(str1, str2, i, j + 1, memo)
        );
    }

    return memo[key];
};





// can concat

// dynamic programming with memoization
// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)
const canConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s];

    if (s.length === 0) return true;

    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            if (canConcat(suffix, words, memo)) {
                memo[s] = true;
                return true
            }
        }
    }

    memo[s] = false;
    return false;
};




// quickest concat

// dynamic programming with memoization
// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)
const quickestConcat = (s, words) => {
    const result = _quickestConcat(s, words);

    if (result === Infinity) {
        return -1;
    } else {
        return result;
    }
};

const _quickestConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s];

    if (s === '') return 0;

    let min = Infinity;

    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            const attempt = 1 + _quickestConcat(suffix, words, memo);
            min = Math.min(min, attempt);
        }
    }

    memo[s] = min;
    return min;
};

