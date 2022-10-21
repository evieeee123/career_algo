// linked palindrome

    // Write a function, linkedPalindrome, that takes in the head of a linked list as an argument.The function should return a boolean indicating whether or not the linked list is a palindrome.A palindrome is a sequence that is the same both forwards and backwards.

    // test_00:
        // const a = new Node(3);
        // const b = new Node(2);
        // const c = new Node(7);
        // const d = new Node(7);
        // const e = new Node(2);
        // const f = new Node(3);
        
        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = e;
        // e.next = f;

        // 3 -> 2 -> 7 -> 7 -> 2 -> 3
        // linkedPalindrome(a); // true
        
    // test_01:
        // const a = new Node(3);
        // const b = new Node(2);
        // const c = new Node(4);

        // a.next = b;
        // b.next = c;

        // 3 -> 2 -> 4
        // linkedPalindrome(a); // false
        
    // test_02:
        // const a = new Node(3);
        // const b = new Node(2);
        // const c = new Node(3);

        // a.next = b;
        // b.next = c;

        // 3 -> 2 -> 3
        // linkedPalindrome(a); // true
        
    // test_03:
        // const a = new Node(0);
        // const b = new Node(1);
        // const c = new Node(0);
        // const d = new Node(1);
        // const e = new Node(0);

        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = e;

        // 0 -> 1 -> 0 -> 1 -> 0
        // linkedPalindrome(a); // true
        
    // test_04:
        // const a = new Node(0);
        // const b = new Node(1);
        // const c = new Node(0);
        // const d = new Node(1);
        // const e = new Node(1);

        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = e;

        // 0 -> 1 -> 0 -> 1 -> 1
        // linkedPalindrome(a); // false
        
    // test_05:
        // const a = new Node(5);

        // 5
        // linkedPalindrome(a); // true
        
    // test_06:
        // linkedPalindrome(null); // true




// middle value

    // Write a function, middleValue, that takes in the head of a linked list as an argument.The function should return the value of the middle node in the linked list.If the linked list has an even number of nodes, then return the value of the second middle node.
    // You may assume that the input list is non - empty.

    // test_00:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        
        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = e;
        
        // a -> b -> c -> d -> e
        // middleValue(a); // c
        
    // test_01:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        // const f = new Node('f');
        
        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = e;
        // e.next = f;
        
        // a -> b -> c -> d -> e -> f
        // middleValue(a); // d
        
    // test_02:
        // const x = new Node('x');
        // const y = new Node('y');
        // const z = new Node('z');
        
        // x.next = y;
        // y.next = z;
        
        // x -> y -> z
        // middleValue(x); // y
        
    // test_03:
        // const x = new Node('x');
        // const y = new Node('y');
        
        // x.next = y;
        
        // x -> y 
        // middleValue(x); // y
        
    // test_04:
        // const q = new Node('q');
        
        // q
        // middleValue(q); // q




// linked list cycle

    // Write a function, linkedListCycle, that takes in the head of a linked list as an argument.The function should return a boolean indicating whether or not the linked list contains a cycle.

    // test_00:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');

        // a.next = b;
        // b.next = c;
        // c.next = d;
        // d.next = b; // cycle

        //         _______
        //       /        \
        // a -> b -> c -> d 

        // linkedListCycle(a);  // true
        
    // test_01:
        // const q = new Node('q');
        // const r = new Node('r');
        // const s = new Node('s');
        // const t = new Node('t');
        // const u = new Node('u');

        // q.next = r;
        // r.next = s;
        // s.next = t;
        // t.next = u;
        // u.next = q; // cycle

        //    ________________
        //  /                 \
        // q -> r -> s -> t -> u 

        // linkedListCycle(q);  // true
        
    // test_02:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');

        // a.next = b;
        // b.next = c;
        // c.next = d;

        // a -> b -> c -> d 

        // linkedListCycle(a);  // false
        
    // test_03:
        // const q = new Node('q');
        // const r = new Node('r');
        // const s = new Node('s');
        // const t = new Node('t');
        // const u = new Node('u');

        // q.next = r;
        // r.next = s;
        // s.next = t;
        // t.next = u;
        // u.next = t; // cycle

        //                   __
        //                 /   \
        // q -> r -> s -> t -> u 

        // linkedListCycle(q);  // true
        
    // test_04:
        // const p = new Node('p');

        // p

        // linkedListCycle(p); // false
        
    // test_05:
        // linkedListCycle(null); // false




// lowest common ancestor

    // Write a function, lowestCommonAncestor, that takes in the root of a binary tree and two values.The function should return the value of the lowest common ancestor of the two values in the tree.
    // You may assume that the tree values are unique and the tree is non - empty.
    // Note that a node may be considered an ancestor of itself.

        // example tree
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        // const f = new Node('f');
        // const g = new Node('g');
        // const h = new Node('h');

        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // e.left = g;
        // e.right = h;

        //      a
        //    /    \
        //   b      c
        //  / \      \
        // d   e      f
        //    / \
        //    g  h
        // test_00
        // lowestCommonAncestor(a, 'd', 'h'); // b
        // test_01
        // lowestCommonAncestor(a, 'd', 'g'); // b
        // test_02
        // lowestCommonAncestor(a, 'g', 'c'); // a
        // test_03
        // lowestCommonAncestor(a, 'b', 'g'); // b
        // test_04
        // lowestCommonAncestor(a, 'f', 'c'); // c
        // example tree
        // const l = new Node('l');
        // const m = new Node('m');
        // const n = new Node('n');
        // const o = new Node('o');
        // const p = new Node('p');
        // const q = new Node('q');
        // const r = new Node('r');
        // const s = new Node('s');
        // const t = new Node('t');

        // l.left = m;
        // l.right = n;
        // n.left = o;
        // n.right = p;
        // o.left = q;
        // o.right = r;
        // p.left = s;
        // p.right = t;

        //        l
        //     /     \
        //    m       n
        //         /    \
        //         o     p
        //        / \   / \
        //       q   r s   t
        // test_05
        // lowestCommonAncestor(l, 'r', 'p'); // n
        // test_06
        // lowestCommonAncestor(l, 'm', 'o'); // l
        // test_07
        // lowestCommonAncestor(l, 't', 'q'); // n
        // test_08
        // lowestCommonAncestor(l, 's', 'p'); // p
