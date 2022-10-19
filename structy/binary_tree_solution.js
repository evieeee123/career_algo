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




// tree value count

// way 1 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeValueCount = (root, target) => {
    if (root === null) return 0;
    if (root.val === target) {
        return 1 + treeValueCount(root.left, target) + treeValueCount(root.right, target);
    } else {
        return treeValueCount(root.left, target) + treeValueCount(root.right, target)
    }
};

// way 2 (recursive)
// const treeValueCount = (root, target) => {
//     if (root === null) return 0;
//     const match = root.val === target ? 1 : 0;
//     return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
// };

// way 3 (depth first (iterative))
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeValueCount = (root, target) => {
//     if (root === null) return 0;

//     let count = 0;
//     const stack = [root];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if (current.val === target) count += 1;

//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }

//     return count;
// };

// way 4 (breadth first)
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeValueCount = (root, target) => {
//     if (root === null) return 0;

//     let count = 0;
//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.val === target) count += 1;

//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }

//     return count;
// };
// // // Note: this solution should really be considered O(n ^ 2) runtime because the JavaScript shift() methods runs in O(n).JavaScript does not have a native queue data structure that is maximally efficient.




// how high

// way 1 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const howHigh = (node) => {
    if (node === null) return -1;

    const leftHeight = howHigh(node.left);
    const rightHeight = howHigh(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
};

// way 2 (recursive)
// const howHigh = (node) => {
//     if (node === null) return -1;
//     return 1 + Math.max(howHigh(node.left), howHigh(node.right))
// };




// bottom right value

// way 1 (breadth first)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const bottomRightValue = (root) => {
    const queue = [root];
    let current = null;
    while (queue.length > 0) {
        current = queue.shift();
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return current.val;
};
// Note: this solution should really be considered O(n ^ 2) runtime because the JavaScript shift() methods runs in O(n).JavaScript does not have a native queue data structure that is maximally efficient.

// way 2 (breadth first)
// const bottomRightValue = (root) => {
//     let queue = [root];
//     while (queue.length > 0) {
//         curr = queue.shift();
//         if (curr.left !== null) queue.push(curr.left)
//         if (curr.right !== null) queue.push(curr.right)
//         if (queue.length === 0) return curr.val
//     }
// };




// all tree paths
// n = number of nodes
// Time: ~O(n)
// Space: ~O(n)
// recursive
const allTreePaths = (root) => {
    if (root === null) return [];

    if (root.left === null && root.right === null) return [[root.val]]

    const paths = [];

    const leftSubPaths = allTreePaths(root.left);
    for (let subPath of leftSubPaths) {
        paths.push([root.val, ...subPath]);
    }

    const rightSubPaths = allTreePaths(root.right);
    for (let subPath of rightSubPaths) {
        paths.push([root.val, ...subPath]);
    }

    return paths;
};




// tree levels

// way 1 (depth first (iterative))
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeLevels = (root) => {
    if (root === null) return [];
    const levels = [];

    const stack = [{ node: root, levelNum: 0 }];

    while (stack.length > 0) {
        const { node, levelNum } = stack.pop();

        if (levels.length === levelNum) {
            levels.push([node.val]);
        } else {
            levels[levelNum].push(node.val)
        }

        if (node.right !== null) stack.push({ node: node.right, levelNum: levelNum + 1 });
        if (node.left !== null) stack.push({ node: node.left, levelNum: levelNum + 1 });
    }

    return levels
};

// way 2 (breadth first (iterative))

// const treeLevels = (root) => {
//     if (root === null) return [];

//     const levels = [];
//     const queue = [{ node: root, levelNum: 0 }];
//     while (queue.length > 0) {
//         const { node, levelNum } = queue.shift();

//         if (levels.length === levelNum) {
//             levels[levelNum] = [node.val];
//         } else {
//             levels[levelNum].push(node.val);
//         }

//         if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
//         if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
//     }

//     return levels;
// };

// way 3 (depth first (recursive))
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeLevels = (root) => {
//     const levels = [];
//     _treeLevels(root, levels, 0);
//     return levels;
// };

// const _treeLevels = (root, levels, levelNum) => {
//     if (root === null) return;

//     if (levels.length === levelNum) {
//         levels[levelNum] = [root.val];
//     } else {
//         levels[levelNum].push(root.val);
//     }

//     _treeLevels(root.left, levels, levelNum + 1);
//     _treeLevels(root.right, levels, levelNum + 1);
// };





// level averages

// way 1 (iterative: DFS - stack)
const levelAverages = (root) => {
    if (root === null) return [];
    const levels = [];

    const stack = [{ node: root, levelNum: 0 }];

    while (stack.length > 0) {
        const { node, levelNum } = stack.pop();

        if (levels.length === levelNum) {
            levels.push([node.val]);
        } else {
            levels[levelNum].push(node.val)
        }

        if (node.right !== null) stack.push({ node: node.right, levelNum: levelNum + 1 });
        if (node.left !== null) stack.push({ node: node.left, levelNum: levelNum + 1 });
    }

    return levels.map(avg);
};

const avg = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return sum / arr.length;
}

// way 2 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const levelAverages = (root) => {
//     const levels = [];
//     fillLevels(root, levels, 0);

//     const avgs = [];
//     for (let level of levels) {
//         avgs.push(avg(level));
//     }
//     return avgs;
// };

// const fillLevels = (root, levels, levelNum) => {
//     if (root === null) return;

//     if (levels.length === levelNum) {
//         levels[levelNum] = [root.val];
//     } else {
//         levels[levelNum].push(root.val);
//     }

//     fillLevels(root.left, levels, levelNum + 1);
//     fillLevels(root.right, levels, levelNum + 1);
// };

// const avg = (array) => {
//     let sum = 0;
//     for (let num of array) {
//         sum += num;
//     }
//     return sum / array.length;
// };



// leaf list

// way 1 (depth first (iterative))
// n = number of nodes
// Time: O(n)
// Space: O(n)
const leafList = (root) => {
    if (root === null) return [];
    const leaves = [];
    const stack = [root];
    while (stack.length) {
        const current = stack.pop();
        if (current.left === null && current.right === null) leaves.push(current.val);

        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return leaves;
};

// way 2 (depth first (recursive))
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const leafList = (root) => {
//     const leaves = [];
//     fillLeaves(root, leaves);
//     return leaves;
// };

// const fillLeaves = (root, leaves) => {
//     if (root === null) return;
//     if (root.left === null && root.right === null) leaves.push(root.val);
//     fillLeaves(root.left, leaves);
//     fillLeaves(root.right, leaves);
// };
