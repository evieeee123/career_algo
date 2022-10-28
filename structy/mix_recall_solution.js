// 1. linked palindrome

// n = number of nodes
// Time: O(n)
// Space: O(n)
const linkedPalindrome = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values.join(',') === values.reverse().join(',');
};




// 2. middle value

// way 1 (using an array)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const middleValue = (head) => {
    const values = [];

    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values[Math.floor(values.length / 2)];
};

// way 2 (2 pointers)
// n = number of nodes
// Time: O(n)
// Space: O(1)

// const middleValue = (head) => {
//     let fast = head;
//     let slow = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow.val;
// };




// 3. linked list cycle

// way 1 (using a set)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const linkedListCycle = (head) => {
    const nodes = new Set();

    let current = head;
    while (current !== null) {
        if (nodes.has(current)) return true;
        nodes.add(current);
        current = current.next;
    }

    return false;
};

// way 2 (using two pointers)
// n = number of nodes
// Time: O(n)
// Space: O(1)

// const linkedListCycle = (head) => {
//     let slow = head;
//     let fast = head;
//     let firstIteration = true;
//     while (fast !== null && fast.next !== null) {
//         if (slow === fast && !firstIteration) return true;

//         slow = slow.next;
//         fast = fast.next.next;
//         firstIteration = false;
//     }

//     return false;
// };





// 4. lowest common ancestor

// depth first path
// n = number of nodes
// Time: O(n)
// Space: O(n)
const lowestCommonAncestor = (root, val1, val2) => {
    const path1 = findPath(root, val1);
    const path2 = findPath(root, val2);
    const set2 = new Set(path2);

    for (let val of path1) {
        if (set2.has(val)) return val;
    }
};

const findPath = (root, targetVal) => {
    if (root === null) return null;

    if (root.val === targetVal) return [root.val];

    const leftPath = findPath(root.left, targetVal);
    if (leftPath !== null) {
        leftPath.push(root.val);
        return leftPath;
    }

    const rightPath = findPath(root.right, targetVal);
    if (rightPath !== null) {
        rightPath.push(root.val);
        return rightPath;
    }

    return null;
};




// 5. flip tree

// way 1(recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const flipTree = (root) => {
    if (root === null) return null;
    const left = flipTree(root.left);
    const right = flipTree(root.right);
    root.right = left;
    root.left = right;
    return root;
};




// 6. lefty nodes

// way 1 (depth first)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const leftyNodes = (root) => {
    const values = [];

    const traverse = (node, level) => {
        if (node === null) return;

        if (values[level] === undefined) values.push(node.val);

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    };

    traverse(root, 0);
    return values;
};





//  7. can color

// way 1 (depth first recursive)
// n = number of nodes
// Time: O(n ^ 2)
// Space: O(n)
const canColor = (graph) => {
    const coloring = {};

    for (let node in graph) {
        if (!(node in coloring)) {
            if (!valid(graph, node, coloring, false)) {
                return false;
            }
        }
    }

    return true;
};

const valid = (graph, node, coloring, currentColor) => {
    if (node in coloring) return currentColor === coloring[node];

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!valid(graph, neighbor, coloring, !currentColor)) {
            return false;
        }
    }

    return true;
};





// 8. tolerant teams

// way 1 (depth first coloring)
// e = number of rivalries
// n = number of people
// Time: O(e)
// Space: O(n)
const tolerantTeams = (rivalries) => {
    const graph = buildGraph(rivalries);

    const coloring = {};
    for (let node in graph) {
        if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
            return false;
        }
    }

    return true;
};

const isBipartite = (graph, node, coloring, currentColor) => {
    if (node in coloring) return coloring[node] === currentColor;

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
            return false;
        }
    }

    return true;
};

const buildGraph = (rivalries) => {
    const graph = {};
    for (let pair of rivalries) {
        const [a, b] = pair;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    };

    return graph;
};




// 9. rare routing

// way 1 (depth first recursive)
// n = number of nodes
// Time: O(n ^ 2)
// Space: O(n)
const rareRouting = (n, roads) => {
    const graph = makeGraph(n, roads);
    const visited = new Set();
    const valid = validate(graph, '0', visited, null);
    return valid && visited.size === n;
};

const validate = (graph, node, visited, lastNode) => {
    if (visited.has(node)) return false;

    visited.add(node);

    for (let neighbor of graph[node]) {
        if (neighbor !== lastNode) {
            if (!validate(graph, neighbor, visited, node)) {
                return false;
            }
        }
    }

    return true;
};

const makeGraph = (n, roads) => {
    const graph = {};
    for (let city = 0; city < n; city += 1) {
        graph[city] = [];
    }

    for (let road of roads) {
        const [a, b] = road;
        graph[a].push(String(b));
        graph[b].push(String(a));
    }

    return graph;
};




// 10. max increasing subseq

// way 1 (dynamic programming with memoization)
// n = length of array
// Time: O(n ^ 2)
// Space: O(n ^ 2)
const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
    const key = i + ',' + previous;
    if (key in memo) return memo[key];
    if (i === numbers.length) return 0;

    const options = [];
    const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
    options.push(dontTakeCurrent);

    const current = numbers[i];
    if (current > previous) {
        const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
        options.push(takeCurrent);
    }

    memo[key] = Math.max(...options);
    return memo[key];
};





// 11. positioning plants

// way 1 (dynamic programming with memoization)
// n = # of garden positions(rows)
// m = # of plant types(columns)
// Time: O(nm)
// Space: O(nm)
const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
    const key = pos + ',' + lastPlant;
    if (key in memo) return memo[key];

    if (pos === costs.length) return 0;

    let min = Infinity;
    for (let plant = 0; plant < costs[pos].length; plant += 1) {
        if (plant !== lastPlant) {
            const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
            min = Math.min(min, candidate);
        }
    }

    memo[key] = min;
    return min;
};





// 12. breaking boundaries

// way 1 (dynamic programming with memoization)
// m = # rows
// n = # columns
// k = # moves
// Time: O(mnk)
// Space: O(mnk)
const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
    const key = `${k},${r},${c}`;
    if (key in memo) return memo[key];

    const rowInbounds = 0 <= r && r < m;
    const colInbounds = 0 <= c && c < n;
    if (!rowInbounds || !colInbounds) return 1;

    if (k === 0) return 0;

    let count = 0;
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let delta of deltas) {
        const [dRow, dCol] = delta;
        count += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo);
    }

    memo[key] = count;
    return count;      // === return memo[key]
};




// 13. merge sort

// way 1 (merge sort)
// n = array size
// Time: O(nlogn)
// Space: O(n)
const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
};

const merge = (array1, array2) => {
    array1.reverse();
    array2.reverse();
    const merged = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[array1.length - 1] < array2[array2.length - 1]) {
            merged.push(array1.pop());
        } else {
            merged.push(array2.pop());
        }
    }

    merged.push(...array1.reverse());
    merged.push(...array2.reverse());

    return merged;
};

// way 2 (no reverse)
// const mergeSort = (nums) => {
//     if (nums.length <= 1) return nums;
//     let mid = Math.floor(nums.length / 2)
//     let left = nums.slice(0, mid)
//     let right = nums.slice(mid)
//     let mergeLeft = mergeSort(left)
//     let mergeRight = mergeSort(right)
//     return merge(mergeLeft, mergeRight)
// };

// const merge = (left, right) => {
//     let merged = [];
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] > right[0]) {
//             merged.push(right.shift())
//         } else {
//             merged.push(left.shift())
//         }
//     }
//     merged.push(...left);
//     merged.push(...right);
//     return merged
// }




// 14. combine intervals

// way 1 (sort and combine)
// n = number of intervals
// Time: O(nlogn)
// Space: O(n)
const combineIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
    const combined = [intervals[0]];
    for (let currentInterval of sortedIntervals.slice(1)) {
        const lastInterval = combined[combined.length - 1];
        const [lastStart, lastEnd] = lastInterval;
        const [currentStart, currentEnd] = currentInterval;
        if (currentStart <= lastEnd) {
            if (currentEnd > lastEnd) {
                lastInterval[1] = currentEnd;
            }
        } else {
            combined.push(currentInterval);
        }
    }
    return combined;
};




// 15. binary search

// way 1 (binary search)
// n = length of numbers array
// Time: O(logn)
// Space: O(1)
const binarySearch = (numbers, target) => {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (target < numbers[mid]) {
            hi = mid - 1;
        } else if (target > numbers[mid]) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};




// 16. binary search tree includes

// way 1 (binary search)
// n = number of nodes
// Worst Case
    // Time: O(n)
    // Space: O(n)
// Best Case(balanced - tree)
    // Time: O(log(n))
    // Space: O(log(n))
const binarySearchTreeIncludes = (root, target) => {
    if (root === null) return false;

    if (root.val === target) return true;

    if (target < root.val) {
        return binarySearchTreeIncludes(root.left, target);
    } else {
        return binarySearchTreeIncludes(root.right, target);
    }
};




// 17. is binary search tree

// way 1 (in order traversal)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const isBinarySearchTree = (root, target) => {
    const values = [];
    inOrderTraversal(root, values);
    return isSorted(values);
};

const inOrderTraversal = (root, values) => {
    if (root === null) return;
    inOrderTraversal(root.left, values);
    values.push(root.val);
    inOrderTraversal(root.right, values);
};

const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i += 1) {
        const current = numbers[i];
        const next = numbers[i + 1];
        if (next < current) return false;
    }

    return true;
};




// 18. post order

// way 1
// n = number of nodes
// Time: O(n)
// Space: O(n)
const postOrder = (root) => {
    const values = [];
    postOrderTraversal(root, values);
    return values;
};

const postOrderTraversal = (root, values) => {
    if (root === null) return;
    postOrderTraversal(root.left, values);
    postOrderTraversal(root.right, values);
    values.push(root.val);
};




// 19. build tree in post

// way 1 (recursive)
// n = length of array
// Time: O(n ^ 2)
// Space: O(n ^ 2)
const buildTreeInPost = (inOrder, postOrder) => {
    if (inOrder.length === 0) return null;
    const value = postOrder[postOrder.length - 1];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftIn = inOrder.slice(0, mid);
    const rightIn = inOrder.slice(mid + 1);
    const leftPost = postOrder.slice(0, leftIn.length);
    const rightPost = postOrder.slice(leftIn.length, -1);
    root.left = buildTreeInPost(leftIn, leftPost);
    root.right = buildTreeInPost(rightIn, rightPost);
    return root;
};




// 20. build tree in pre

// way 1 (recursive in-place)
// n = length of array
// Time: O(n)
// Space: O(n)
const buildTreeInPre = (
    inOrder,
    preOrder,
    inOrderStart = 0,
    inOrderEnd = inOrder.length - 1,
    preOrderStart = 0,
    preOrderEnd = preOrder.length - 1) => {
    if (inOrderEnd < inOrderStart) return null;
    const value = preOrder[preOrderStart];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftSize = mid - inOrderStart;
    root.left = buildTreeInPre(
        inOrder,
        preOrder,
        inOrderStart,
        mid - 1,
        preOrderStart + 1,
        preOrderStart + leftSize
    );
    root.right = buildTreeInPre(
        inOrder,
        preOrder,
        mid + 1,
        inOrderEnd,
        preOrderStart + leftSize + 1,
        preOrderEnd
    );
    return root;
};

// way 2 (recursive with array copies)

// n = length of array
// Time: O(n ^ 2)
// Space: O(n ^ 2)
// const buildTreeInPre = (inOrder, preOrder) => {
//     if (inOrder.length === 0) return null;
//     const value = preOrder[0];
//     const root = new Node(value);
//     const mid = inOrder.indexOf(value);
//     const leftInOrder = inOrder.slice(0, mid);
//     const rightInOrder = inOrder.slice(mid + 1);
//     const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
//     const rightPreOrder = preOrder.slice(leftInOrder.length + 1);
//     root.left = buildTreeInPre(leftInOrder, leftPreOrder);
//     root.right = buildTreeInPre(rightInOrder, rightPreOrder);
//     return root;
// };



// 21. lexical order

// way 1 
// n = length of shorter string
// Time: O(n)
// Space: O(1)
const lexicalOrder = (word1, word2, alphabet) => {
    const length = Math.max(word1.length, word2.length);
    for (let i = 0; i < length; i += 1) {
        const char1 = word1[i];
        const char2 = word2[i];
        const value1 = alphabet.indexOf(char1);
        const value2 = alphabet.indexOf(char2);
        if (value1 < value2) {
            return true;
        } else if (value1 > value2) {
            return false;
        }
    }
    return true;
};




// 22. detect dictionary

// way 1 
// n = # of words in dictionary
// k = # length of longest word
// Time: O(nk)
// Space: O(1)
const detectDictionary = (dictionary, alphabet) => {
    for (let i = 0; i < dictionary.length - 1; i += 1) {
        const current = dictionary[i];
        const next = dictionary[i + 1];
        if (!lexicalOrder1(current, next, alphabet)) return false;
    }

    return true;
};

const lexicalOrder1 = (word1, word2, alphabet) => {
    const length = Math.max(word1.length, word2.length);
    for (let i = 0; i < length; i += 1) {
        const char1 = word1[i];
        const char2 = word2[i];
        const value1 = char1 === undefined ? -Infinity : alphabet.indexOf(char1);
        const value2 = char2 === undefined ? -Infinity : alphabet.indexOf(char2);
        if (value1 < value2) {
            return true;
        } else if (value1 > value2) {
            return false;
        }
    }
    return true;
};




// 23. topological order

// way 1 (topological order)
// e = number of edges
// n = number of nodes
// Time: O(e + n)
// Space: O(n)
const topologicalOrder = (graph) => {
    const numParents = {};
    for (let node in graph) {
        numParents[node] = 0;
    }
    for (let node in graph) {
        for (let child of graph[node]) {
            numParents[child] += 1;
        }
    }

    const ready = [];
    for (let node in numParents) {
        if (numParents[node] === 0) {
            ready.push(node);
        }
    }

    const order = [];
    while (ready.length > 0) {
        const node = ready.pop();
        order.push(node);
        for (let child of graph[node]) {
            numParents[child] -= 1;
            if (numParents[child] === 0) {
                ready.push(child);
            }
        }
    }
    return order;
};




// 24. safe cracking

// way 1 (graph topological order)
// e = number of hints
// Time: O(e)
// Space: O(e)
const safeCracking = (hints) => {
    const graph = buildGraph3(hints);
    return topologicalOrder2(graph);
};

const buildGraph3 = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
    }

    return graph;
};

const topologicalOrder2 = (graph) => {
    const numParents = {};
    for (let node in graph) {
        numParents[node] = 0;
    }

    for (let node in graph) {
        for (let child of graph[node]) {
            numParents[child] += 1;
        }
    }

    const ready = [];
    for (let node in numParents) {
        if (numParents[node] === 0) ready.push(node);
    }

    let order = '';
    while (ready.length > 0) {
        const node = ready.pop();
        order += node;
        for (let child of graph[node]) {
            numParents[child] -= 1;
            if (numParents[child] === 0) ready.push(child)
        }
    }

    return order;
};

// way 2 (same)

// const safeCracking = (hints) => {
//     let graph = buildGraph(hints);
//     let numParent = {};
//     for (let node in graph) {
//         numParent[node] = 0;
//     }

//     for (let node in graph) {
//         for (let child of graph[node]) {
//             numParent[child]++;
//         }
//     }

//     let ready = [];
//     for (let node in numParent) {
//         if (numParent[node] === 0) ready.push(node)
//     }

//     let order = '';
//     while (ready.length > 0) {
//         const node = ready.pop();
//         order += node;
//         for (let child of graph[node]) {
//             numParent[child]--;
//             if (numParent[child] === 0) ready.push(child)
//         }
//     }

//     return order
// };

// const buildGraph = (hints) => {
//     let graph = {};
//     for (let hint of hints) {
//         const [a, b] = hint;
//         if (!(a in graph)) graph[a] = [];
//         if (!(b in graph)) graph[b] = [];
//         graph[a].push(b);
//     }
//     return graph
// }




// 25. string search

// way 1 (depth first search)
// r = # grid rows
// c = # grid columns
// Time: O(3 ^ (r * c))
// Space: O(r * c)
const stringSearch = (grid, s) => {
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (dfs(grid, s, r, c)) return true;
        }
    }
    return false;
};

const dfs = (grid, s, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    if (s === '') return true;

    if (!rowInbounds || !colInbounds) return false;

    const char = grid[row][col];
    if (char !== s[0]) return false;

    const suffix = s.slice(1);
    grid[row][col] = '*';

    const result = dfs(grid, suffix, row + 1, col) ||
        dfs(grid, suffix, row - 1, col) ||
        dfs(grid, suffix, row, col + 1) ||
        dfs(grid, suffix, row, col - 1);

    grid[row][col] = char;
    return result;
};