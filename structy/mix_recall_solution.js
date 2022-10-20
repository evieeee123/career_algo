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