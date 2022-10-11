// merge list
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.The function should merge the two lists together into single sorted linked list.The function should return the head of the merged linked list.
// Do this in -place, by mutating the original Nodes.
// You may assume that both input lists are non - empty and contain increasing sorted numbers.

    // test_00:
    //     const a = new Node(5);
    //     const b = new Node(7);
    //     const c = new Node(10);
    //     const d = new Node(12);
    //     const e = new Node(20);
    //     const f = new Node(28);
    //     a.next = b;
    //     b.next = c;
    //     c.next = d;
    //     d.next = e;
    //     e.next = f;
    //     // 5 -> 7 -> 10 -> 12 -> 20 -> 28

    //     const q = new Node(6);
    //     const r = new Node(8);
    //     const s = new Node(9);
    //     const t = new Node(25);
    //     q.next = r;
    //     r.next = s;
    //     s.next = t;
    //     // 6 -> 8 -> 9 -> 25

    //     mergeLists(a, q);
    //     // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 

    //     test_01:
    //         const a = new Node(5);
    //         const b = new Node(7);
    //         const c = new Node(10);
    //         const d = new Node(12);
    //         const e = new Node(20);
    //         const f = new Node(28);
    //         a.next = b;
    //         b.next = c;
    //         c.next = d;
    //         d.next = e;
    //         e.next = f;
    //         // 5 -> 7 -> 10 -> 12 -> 20 -> 28

    //         const q = new Node(1);
    //         const r = new Node(8);
    //         const s = new Node(9);
    //         const t = new Node(10);
    //         q.next = r;
    //         r.next = s;
    //         s.next = t;
    //         // 1 -> 8 -> 9 -> 10

    //         mergeLists(a, q);
    //         // 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28
            
    //     test_02:
    //         const h = new Node(30);
    //         // 30

    //         const p = new Node(15);
    //         const q = new Node(67);
    //         p.next = q;
    //         // 15 -> 67

    //         mergeLists(h, p);
    //         // 15 -> 30 -> 67





// is univalue list

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
// You may assume that the input list is non - empty.

    // test_00:
    //     const a = new Node(7);
    //     const b = new Node(7);
    //     const c = new Node(7);

    //     a.next = b;
    //     b.next = c;

    //     // 7 -> 7 -> 7

    //     isUnivalueList(a); // true
    // test_01:
    //     const a = new Node(7);
    //     const b = new Node(7);
    //     const c = new Node(4);

    //     a.next = b;
    //     b.next = c;

    //     // 7 -> 7 -> 4

    //     isUnivalueList(a); // false

    // test_02:
    //     const u = new Node(2);
    //     const v = new Node(2);
    //     const w = new Node(2);
    //     const x = new Node(2);
    //     const y = new Node(2);

    //     u.next = v;
    //     v.next = w;
    //     w.next = x;
    //     x.next = y;

    //     // 2 -> 2 -> 2 -> 2 -> 2

    //     isUnivalueList(u); // true

    // test_03:
    //     const u = new Node(2);
    //     const v = new Node(2);
    //     const w = new Node(3);
    //     const x = new Node(3);
    //     const y = new Node(2);

    //     u.next = v;
    //     v.next = w;
    //     w.next = x;
    //     x.next = y;

    //     // 2 -> 2 -> 3 -> 3 -> 2

    //     isUnivalueList(u); // false

    // test_04:
    //     const z = new Node('z');

    //     // z

    //     isUnivalueList(z); // true





// longest streak
    // Write a function, longestStreak, that takes in the head of a linked list as an argument.The function should return the length of the longest consecutive streak of the same value within the list.

    // test_00:
    //     const a = new Node(5);
    //     const b = new Node(5);
    //     const c = new Node(7);
    //     const d = new Node(7);
    //     const e = new Node(7);
    //     const f = new Node(6);

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;
    //     d.next = e;
    //     e.next = f;

    //     // 5 -> 5 -> 7 -> 7 -> 7 -> 6

    //     longestStreak(a); // 3

    // test_01:
    //     const a = new Node(3);
    //     const b = new Node(3);
    //     const c = new Node(3);
    //     const d = new Node(3);
    //     const e = new Node(9);
    //     const f = new Node(9);

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;
    //     d.next = e;
    //     e.next = f;

    //     // 3 -> 3 -> 3 -> 3 -> 9 -> 9

    //     longestStreak(a); // 4

    // test_02:
    //     const a = new Node(9);
    //     const b = new Node(9);
    //     const c = new Node(1);
    //     const d = new Node(9);
    //     const e = new Node(9);
    //     const f = new Node(9);

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;
    //     d.next = e;
    //     e.next = f;

    //     // 9 -> 9 -> 1 -> 9 -> 9 -> 9

    //     longestStreak(a); // 3

    // test_03:
    //     const a = new Node(5);
    //     const b = new Node(5);

    //     a.next = b;

    //     // 5 -> 5

    //     longestStreak(a); // 2

    // test_04:
    //     const a = new Node(4);

    //     // 4

    //     longestStreak(a); // 1

    // test_05:
    //     longestStreak(null); // 0




// remove node
    // Write a function, removeNode, that takes in the head of a linked list and a target value as arguments.The function should delete the node containing the target value from the linked list and return the head of the resulting linked list.If the target appears multiple times in the linked list, only remove the first instance of the target in the list.
    // Do this in -place.
    // You may assume that the input list is non - empty.
    // You may assume that the input list contains the target.

    // test_00:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");
    //     const e = new Node("e");
    //     const f = new Node("f");

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;
    //     d.next = e;
    //     e.next = f;

    //     // a -> b -> c -> d -> e -> f

    //     removeNode(a, "c");
    //     // a -> b -> d -> e -> f

    // test_01:
    //     const x = new Node("x");
    //     const y = new Node("y");
    //     const z = new Node("z");

    //     x.next = y;
    //     y.next = z;

    //     // x -> y -> z

    //     removeNode(x, "z");
    //     // x -> y

    // test_02:
    //     const q = new Node("q");
    //     const r = new Node("r");
    //     const s = new Node("s");

    //     q.next = r;
    //     r.next = s;

    //     // q -> r -> s

    //     removeNode(q, "q");
    //     // r -> s
    //     test_03:
    //     const node1 = new Node("h");
    //     const node2 = new Node("i");
    //     const node3 = new Node("j");
    //     const node4 = new Node("i");

    //     node1.next = node2;
    //     node2.next = node3;
    //     node3.next = node4;

    //     // h -> i -> j -> i

    //     removeNode(node1, "i");
    //     // h -> j -> i

    // test_04:
    //     const t = new Node("t");

    //     // t

    //     removeNode(t, "t");
    //     // null




// insert node
    // Write a function, insertNode, that takes in the head of a linked list, a value, and an index.The function should insert a new node with the value into the list at the specified index.Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
    // Do this in -place.
    // You may assume that the input list is non - empty and the index is not greater than the length of the input list.

    // test_00:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;

    //     // a -> b -> c -> d

    //     insertNode(a, 'x', 2);
    //     // a -> b -> x -> c -> d

    // test_01:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;

    //     // a -> b -> c -> d

    //     insertNode(a, 'v', 3);
    //     // a -> b -> c -> v -> d

    // test_02:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");

    //     a.next = b;
    //     b.next = c;
    //     c.next = d;

    //     // a -> b -> c -> d

    //     insertNode(a, 'm', 4);
    //     // a -> b -> c -> d -> m

    // test_03:
    //     const a = new Node("a");
    //     const b = new Node("b");

    //     a.next = b;

    //     // a -> b

    //     insertNode(a, 'z', 0);
    //     // z -> a -> b 






// create linked list

    // Write a function, createLinkedList, that takes in an array of values as an argument.The function should create a linked list containing each element of the array as the values of the nodes.The function should return the head of the linked list.

    // test_00:
    //     createLinkedList(["h", "e", "y"]);
    //     // h -> e -> y
    // test_01:
    //     createLinkedList([1, 7, 1, 8]);
    //     // 1 -> 7 -> 1 -> 8
    // test_02:
    //     createLinkedList(["a"]);
    //     // a
    // test_03:
    //     createLinkedList([]);
    //     // null

