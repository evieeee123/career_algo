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