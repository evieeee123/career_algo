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

