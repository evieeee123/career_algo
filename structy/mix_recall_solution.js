// linked palindrome

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




// middle value

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




// linked list cycle

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





// lowest common ancestor

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
