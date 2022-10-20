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