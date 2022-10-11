// tree path finder

// way 1 (depth first)
// n = number of nodes
// Time: O(n ^ 2)
// Space: O(n)

const pathFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];

    const leftPath = pathFinder(root.left, target);
    if (leftPath !== null) return [root.val, ...leftPath];   //...leftPath means create an arr not just including root.val, but including all the leftPath nodes

    const rightPath = pathFinder(root.right, target);
    if (rightPath !== null) return [root.val, ...rightPath]; //time compelexity of ...rightPath is O(n); the arr is also O(n), so the time complexity of this method is O(n^2). Each time call pathFinder is O(n).

    return null;
};

// way 2 (depth first w/ push)
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const pathFinder = (root, target) => {
//     const result = pathFinderHelper(root, target);
//     if (result === null) {
//         return null;
//     } else {
//         return result.reverse();
//     }
// };

// const pathFinderHelper = (root, target) => {
//     if (root === null) return null;
//     if (root.val === target) return [root.val];

//     const leftPath = pathFinderHelper(root.left, target);
//     if (leftPath !== null) {
        leftPath.push(root.val);    //if we use unshift, it won't help with the time complexity. Because in JS, insert an ele at the beginning of the arr is also O(n)
//         return leftPath;
//     }

//     const rightPath = pathFinderHelper(root.right, target);
//     if (rightPath !== null) {
//         rightPath.push(root.val);
//         return rightPath;
//     }

//     return null;
// };
