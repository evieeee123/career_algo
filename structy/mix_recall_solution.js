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