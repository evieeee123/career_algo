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