// merge list

// way 1 (iterative)
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

const mergeLists = (head1, head2) => {
    let dummyHead = new Node(null)
    let tail = dummyHead;
    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        tail = tail.next
    }

    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;

    return dummyHead.next
};

// module.exports = {
//     mergeLists,
// };

// way 2 (recursive)
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(min(n, m))

// const mergeLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;

//     if (head1.val < head2.val) {
//         const next1 = head1.next;
//         head1.next = mergeLists(next1, head2);
//         return head1;
//     } else {
//         const next2 = head2.next;
//         head2.next = mergeLists(head1, next2);
//         return head2;
//     }
// };




// is univalue list

// way 1 (iterative)
// n = number of nodes
// Time: O(n)
// Space: O(1)

const isUnivalueList = (head) => {
    let current = head;

    while (current !== null) {
        if (current.val !== head.val) return false;
        current = current.next;
    }

    return true;
}

// way 2 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const isUnivalueList = (head, prevVal = null) => {
//     if (head === null) return true;
//     if (prevVal === null || prevVal === head.val) {
//         return isUnivalueList(head.next, head.val);
//     } else {
//         return false;
//     }
// }

// way 3 (recursive)
// const isUnivalueList = (head, prevVal = null) => {
//     if (head === null) return true;
//     if (head.val !== prevVal && prevVal !== null) return false;
//     return isUnivalueList(head.next, head.val)
// };




// longest streak

//way 1 (iterative)
const longestStreak = (head) => {
    let curr = head;
    let max = -Infinity;
    let count = 1;
    if (head === null) return 0;

    while (curr.next !== null) {
        if (curr.val === curr.next.val) {
            count++;
        } else {
            max = Math.max(max, count)
            count = 1
        }
        curr = curr.next
    }
    if (curr.next === null) max = Math.max(max, count);
    return max
};

// way 2 (iterative)
// n = number of nodes
// Time: O(n)
// Space: O(1)

// const longestStreak = (head) => {
//     let maxStreak = 0;
//     let currentStreak = 0;
//     let currentNode = head;
//     let prevVal = null;

//     while (currentNode !== null) {
//         if (currentNode.val === prevVal) {
//             currentStreak += 1;
//         } else {
//             currentStreak = 1;
//         }

//         if (currentStreak > maxStreak) {
//             maxStreak = currentStreak;
//         }

//         prevVal = currentNode.val;
//         currentNode = currentNode.next;
//     }

//     return maxStreak;
// };



// remove node

// way 1 (iterative)
// n = number of nodes
// Time: O(n)
// Space: O(1)
const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next
    let prev = null;
    let curr = head;

    while (curr !== null) {
        if (curr.val === targetVal) {
            prev.next = curr.next;
            break;
        }

        prev = curr;
        curr = curr.next
    }
    return head
};

// way 2 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
// const removeNode = (head, targetVal) => {
//     if (head === null) return null;
//     if (head.val === targetVal) return head.next;
//     head.next = removeNode(head.next, targetVal);
//     return head;
// };




// insert node

// way 1 (iterative)
// n = number of nodes
// Time: O(n)
// Space: O(1)

const insertNode = (head, value, index) => {
    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    let count = 0;
    let current = head;
    while (current !== null) {
        if (count === index - 1) {
            const next = current.next;
            current.next = new Node(value);
            current.next.next = next;
        }

        count += 1;
        current = current.next;
    }
    return head;
};

// way 2 (iterative)
// n = number of nodes
// Time: O(n)
// Space: O(1)

// const insertNode = (head, value, index) => {
//     if (index === 0) {
//         let newHead = new Node(value);
//         newHead.next = head;
//         return newHead
//     }
//     let prev = null;
//     let curr = head;
//     let count = 0;

//     while (curr !== null) {
//         if (count === index) {

//             let newNode = new Node(value);
//             prev.next = newNode;
//             newNode.next = curr;

//         }
//         prev = curr;
//         curr = curr.next;
//         count++;
//     }
//     if (curr === null && count === index) prev.next = new Node(value)

//     return head;
// };

// way 3 (recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const insertNode = (head, value, index, count = 0) => {
//     if (index === 0) {
//         const newHead = new Node(value);
//         newHead.next = head;
//         return newHead;
//     }

//     if (count === index - 1) {
//         const next = head.next;
//         head.next = new Node(value);
//         head.next.next = next;
//         return head;
//     }

//     insertNode(head.next, value, index, count + 1);
//     return head;
// };




// create linked list

// way 1 (iterative)
// n = length of values
// Time: O(n)
// Space: O(n)
const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    for (let val of values) {
        tail.next = new Node(val);
        tail = tail.next;
    }
    return dummyHead.next;
};

// way 2 (iterative)
// const createLinkedList = (values) => {
//     if (values.length === 0) return null;
//     let head = new Node(values[0]);
//     let curr = head;
//     let i = 1;
//     while (i < values.length) {
//         curr.next = new Node(values[i]);
//         curr = curr.next;
//         i++;
//     }
//     return head
// };

// way 3 (recursive)
// n = length of values
// Time: O(n)
// Space: O(n)

// const createLinkedList = (values, i = 0) => {
//     if (i === values.length) return null;
//     const head = new Node(values[i]);
//     head.next = createLinkedList(values, i + 1);
//     return head;
// };

