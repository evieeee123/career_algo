// tree path finder

    // Write a function, pathFinder, that takes in the root of a binary tree and a target value.The function should return an array representing a path to the target value.If the target value is not found in the tree, then return null.
    // You may assume that the tree contains unique values.

    // test_00:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");
    //     const e = new Node("e");
    //     const f = new Node("f");

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;

    //         //  a
    //     //    /   \
    //     //   b     c
    //     //  / \     \
    //     // d   e     f

    //     pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]

    // test_01:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");
    //     const e = new Node("e");
    //     const f = new Node("f");

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;

    //         //  a
    //     //    /   \
    //     //   b     c
    //     //  / \     \
    //     // d   e     f

    //     pathFinder(a, 'p'); // -> null

    // test_02:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");
    //     const e = new Node("e");
    //     const f = new Node("f");
    //     const g = new Node("g");
    //     const h = new Node("h");

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;
    //     e.left = g;
    //     f.right = h;

    //         //  a
    //     //    /   \
    //     //   b     c
    //     //  / \     \
    //     // d   e     f
    //     //    /       \
    //     //   g         h

    //     pathFinder(a, "c"); // -> ['a', 'c']

    // test_03:
    //     const a = new Node("a");
    //     const b = new Node("b");
    //     const c = new Node("c");
    //     const d = new Node("d");
    //     const e = new Node("e");
    //     const f = new Node("f");
    //     const g = new Node("g");
    //     const h = new Node("h");

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;
    //     e.left = g;
    //     f.right = h;

    //         //  a
    //     //    /   \
    //     //   b     c
    //     //  / \     \
    //     // d   e     f
    //     //    /       \
    //     //   g         h

    //     pathFinder(a, "h"); // -> ['a', 'c', 'f', 'h']

    // test_04:
    //     const x = new Node("x");

    //         //  x

    //     pathFinder(x, "x"); // -> ['x']

    // test_05:
    //     pathFinder(null, "x"); // -> null

    // test_06:
    //     const root = new Node(0);
    //     let curr = root;
    //     for (let i = 1; i <= 6000; i += 1) {
    //         curr.right = new Node(i);
    //         curr = curr.right;
    //     }

    //         //  0
    //         //   \
    //         //    1
    //             // \
    //             //  2
    //             //   \
    //             //    3
    //                 // .
    //                 //  .
    //                 //   .
    //                 //  5999
    //                 //    \
    //                 //    6000

    //     pathFinder(root, 3451); // -> [0, 1, 2, 3, ..., 3450, 3451]





// tree value count
    // Write a function, treeValueCount, that takes in the root of a binary tree and a target value.The function should return the number of times that the target occurs in the tree.

    // test_00:
    //     const a = new Node(12);
    //     const b = new Node(6);
    //     const c = new Node(6);
    //     const d = new Node(4);
    //     const e = new Node(6);
    //     const f = new Node(12);

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;

    //     //      12
    //     //    /   \
    //     //   6     6
    //     //  / \     \
    //     // 4   6     12

    //     treeValueCount(a, 6); // -> 3

    // test_01:
    //     const a = new Node(12);
    //     const b = new Node(6);
    //     const c = new Node(6);
    //     const d = new Node(4);
    //     const e = new Node(6);
    //     const f = new Node(12);

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;

    //     //      12
    //     //    /   \
    //     //   6     6
    //     //  / \     \
    //     // 4  6     12

    //     treeValueCount(a, 12); // -> 2

    // test_02:
    //     const a = new Node(7);
    //     const b = new Node(5);
    //     const c = new Node(1);
    //     const d = new Node(1);
    //     const e = new Node(8);
    //     const f = new Node(7);
    //     const g = new Node(1);
    //     const h = new Node(1);

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;
    //     e.left = g;
    //     f.right = h;

    //     //      7
    //     //    /   \
    //     //   5     1
    //     //  / \     \
    //     // 1   8     7
    //     //    /       \
    //     //   1         1
    //     treeValueCount(a, 1); // -> 4

    // test_03:
    //     const a = new Node(7);
    //     const b = new Node(5);
    //     const c = new Node(1);
    //     const d = new Node(1);
    //     const e = new Node(8);
    //     const f = new Node(7);
    //     const g = new Node(1);
    //     const h = new Node(1);

    //     a.left = b;
    //     a.right = c;
    //     b.left = d;
    //     b.right = e;
    //     c.right = f;
    //     e.left = g;
    //     f.right = h;

    //     //      7
    //     //    /   \
    //     //   5     1
    //     //  / \     \
    //     // 1   8     7
    //     //    /       \
    //     //   1         1

    //     treeValueCount(a, 9); // -> 0

    // test_04:
    //     treeValueCount(null, 42); // -> 0





// how high

    // Write a function, howHigh, that takes in the root of a binary tree.The function should return a number representing the height of the tree.
    // The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
    // If the tree is empty, return -1.

    // test_00:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        // const f = new Node('f');
        // 
        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // 
        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        // 
        // howHigh(a); // -> 2
        
    // test_01:
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        // const f = new Node('f');
        // const g = new Node('g');
        // 
        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // e.left = g
        // 
        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /
        //   g
        // 
        // howHigh(a); // -> 3
        
    // test_02:
        // const a = new Node('a');
        // const c = new Node('c');
        // 
        // a.right = c;
        // 
            //  a
            //   \
            //    c
        // 
        // howHigh(a); // -> 1
        
    // test_03:
        // const a = new Node('a');
        // 
            //  a
        // 
        // howHigh(a); // -> 0
        
    // test_04:
        // howHigh(null); // -> -1





// bottom right value
    // Write a function, bottomRightValue, that takes in the root of a binary tree.The function should return the right - most value in the bottom - most level of the tree.
    // You may assume that the input tree is non - empty.

    // test_00:
        // const a = new Node(3);
        // const b = new Node(11);
        // const c = new Node(10);
        // const d = new Node(4);
        // const e = new Node(-2);
        // const f = new Node(1);
        // 
        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // 
                //    3
                // /    \
            //    11     10
            //   / \      \
            //  4   -2     1
        // 
        // bottomRightValue(a); // -> 1

    // test_01:
        // const a = new Node(-1);
        // const b = new Node(-6);
        // const c = new Node(-5);
        // const d = new Node(-3);
        // const e = new Node(-4);
        // const f = new Node(-13);
        // const g = new Node(-2);
        // const h = new Node(6);
        // 
        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // e.left = g;
        // e.right = h;
        // 
                //    -1
                //  /   \
            //    -6    -5
            //   /  \     \
            // -3   -4   -13
                //    / \       
                //   -2  6
        // 
        // bottomRightValue(a); // -> 6

    // test_02:
        // const a = new Node(-1);
        // const b = new Node(-6);
        // const c = new Node(-5);
        // const d = new Node(-3);
        // const e = new Node(-4);
        // const f = new Node(-13);
        // const g = new Node(-2);
        // const h = new Node(6);
        // const i = new Node(7);
        // 
        // 
        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;
        // e.left = g;
        // e.right = h;
        // f.left = i;
        // 
                //    -1
                //  /   \
            //    -6    -5
            //   /  \     \
            // -3   -4   -13
                // / \    /   
            //    -2  6  7 
        // 
        // bottomRightValue(a); // -> 7
        
    // test_03
        // const a = new Node('a');
        // const b = new Node('b');
        // const c = new Node('c');
        // const d = new Node('d');
        // const e = new Node('e');
        // const f = new Node('f');
        // 
        // a.left = b;
        // a.right = c;
        // b.right = d;
        // d.left = e;
        // e.right = f;
        // 
                //  a
            //    /   \ 
            //   b     c
            //    \
                // d
            //    /
            //   e
            //  /
            // f
        // 
        // bottomRightValue(a); // -> 'f'
    
    // test_04
        // const a = new Node(42);
        // 
            //  42
        // 
        // bottomRightValue(a); // -> 42