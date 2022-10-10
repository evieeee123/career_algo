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


