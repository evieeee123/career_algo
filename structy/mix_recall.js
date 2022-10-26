// 1. linked palindrome

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




// 2. middle value

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




// 3. linked list cycle

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




// 4. lowest common ancestor

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





// 5. flip tree

    // Write a function, flipTree, that takes in the root of a binary tree.The function should flip the binary tree, turning left subtrees into right subtrees and vice - versa.This flipping should occur in -place by modifying the original tree.The function should return the root of the tree.

    // test_00
        // const a = new Node("a");
        // const b = new Node("b");
        // const c = new Node("c");
        // const d = new Node("d");
        // const e = new Node("e");
        // const f = new Node("f");
        // const g = new Node("g");
        // const h = new Node("h");

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

        // flipTree(a);

        //       a
        //    /    \
        //   c      b
        //  /     /   \
        // f     e    d
        //     /  \
        //    h    g

    // test_01
        // const u = new Node("u");
        // const t = new Node("t");
        // const s = new Node("s");
        // const r = new Node("r");
        // const q = new Node("q");
        // const p = new Node("p");

        // u.left = t;
        // u.right = s;
        // s.right = r;
        // r.left = q;
        // r.right = p;

        //     u
        //  /    \
        // t      s
        //         \
        //         r
        //        / \
        //        q  p

        // flipTree(u);

        //           u
        //        /    \
        //       s      t
        //      /
        //     r
        //    / \
        //   p  q

    // test_02
        // const l = new Node("l");
        // const m = new Node("m");
        // const n = new Node("n");
        // const o = new Node("o");
        // const p = new Node("p");
        // const q = new Node("q");
        // const r = new Node("r");
        // const s = new Node("s");
        // const t = new Node("t");

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

        // flipTree(l);

        //             l
        //         /      \
        //        n        m
        //      /  \
        //    p     o
        //  / \    / \
        // t   s  r   q

    // test_03
        // const n = new Node("n");
        // const y = new Node("y");
        // const c = new Node("c");

        // n.left = y;
        // n.right = c;

        //       n
        //     /   \
        //    y     c

        // flipTree(n);

        //       n
        //     /   \
        //    c     y




// 6. lefty nodes

    // Write a function, leftyNodes, that takes in the root of a binary tree.The function should return an array containing the left - most value on every level of the tree.The array must be ordered in a top - down fashion where the root is the first element.
    // Note that the left - most node on a level may not necessarily be a left child.

    // test_00
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

        // leftyNodes(a); // [ 'a', 'b', 'd', 'g' ]

    // test_01
        // const u = new Node('u');
        // const t = new Node('t');
        // const s = new Node('s');
        // const r = new Node('r');
        // const q = new Node('q');
        // const p = new Node('p');

        // u.left = t;
        // u.right = s;
        // s.right = r;
        // r.left = q;
        // r.right = p;

        //     u
        //  /    \
        // t      s
        //         \
        //         r
        //        / \
        //        q  p

        // leftyNodes(u); // [ 'u', 't', 'r', 'q' ]

    // test_02
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

        // leftyNodes(l); // [ 'l', 'm', 'o', 'q' ]

    // test_03
        // const n = new Node('n');
        // const y = new Node('y');
        // const c = new Node('c');

        // n.left = y;
        // n.right = c;

        //       n
        //     /   \
        //    y     c

        // leftyNodes(n); // [ 'n', 'y' ]

    // test_04
        // const i = new Node('i');
        // const n = new Node('n');
        // const s = new Node('s');
        // const t = new Node('t');

        // i.right = n;
        // n.left = s;
        // n.right = t;

        //       i
        //        \
        //         n
        //        / \
        //       s   t

        // leftyNodes(i); // [ 'i', 'n', 's' ]

    // test_05
        // leftyNodes(null); // [ ]





//  7. can color

    // Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph.The function should return a boolean indicating whether or not it is possible to color nodes of the graph using two colors in such a way that adjacent nodes are always different colors.
    // For example, given this graph:
    // x - y - z
    // It is possible to color the nodes by using red for x and z,
        // then use blue for y.So the answer is true.

    // For example, given this graph:
    //      q
    //     / \
    //    s - r
    // It is not possible to color the nodes without making two
    // adjacent nodes the same color.So the answer is false.

    // test_00:
        // canColor({
            // x: ["y"],
            // y: ["x", "z"],
            // z: ["y"]
        // }); // -> true

    // test_01:
        // canColor({
            // q: ["r", "s"],
            // r: ["q", "s"],
            // s: ["r", "q"]
        // }); // -> false

    // test_02:
        // canColor({
            // a: ["b", "c", "d"],
            // b: ["a"],
            // c: ["a"],
            // d: ["a"],
        // }); // -> true

    // test_03:
        // canColor({
            // a: ["b", "c", "d"],
            // b: ["a"],
            // c: ["a", "d"],
            // d: ["a", "c"],
        // }); // -> false

    // test_04:
        // canColor({
            // h: ["i", "k"],
            // i: ["h", "j"],
            // j: ["i", "k"],
            // k: ["h", "j"],
        // }); // -> true

    // test_05:
        // canColor({
            // z: []
        // }); // -> true
        //

    // test_06:
        // canColor({
            // h: ["i", "k"],
            // i: ["h", "j"],
            // j: ["i", "k"],
            // k: ["h", "j"],
            // q: ["r", "s"],
            // r: ["q", "s"],
            // s: ["r", "q"]
        // }); // -> false




// 8. tolerant teams

    // Write a function, tolerantTeams, that takes in an array of rivalries as an argument.A rivalry is a pair of people who should not be placed on the same team.The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team.The two teams formed do not have to be the same size.

    // test_00:
        // tolerantTeams([
            // ['philip', 'seb'],
            // ['raj', 'nader']
        // ]); // -> true

    // test_01:
        // tolerantTeams([
            // ['philip', 'seb'],
            // ['raj', 'nader'],
            // ['raj', 'philip'],
            // ['seb', 'raj']
        // ]); // -> false

    // test_02:
        // tolerantTeams([
            // ['cindy', 'anj'],
            // ['alex', 'matt'],
            // ['alex', 'cindy'],
            // ['anj', 'matt'],
            // ['brando', 'matt']
        // ]); // -> true

    // test_03:
        // tolerantTeams([
            // ['alex', 'anj'],
            // ['alex', 'matt'],
            // ['alex', 'cindy'],
            // ['anj', 'matt'],
            // ['brando', 'matt']
        // ]); // -> false

    // test_04:
        // tolerantTeams([
            // ['alan', 'jj'],
            // ['betty', 'richard'],
            // ['jj', 'simcha'],
            // ['richard', 'christine']
        // ]); // -> true

    // test_05:
        // tolerantTeams([
            // ['alan', 'jj'],
            // ['betty', 'richard'],
            // ['jj', 'simcha'],
            // ['richard', 'christine']
        // ]); // -> true

    // test_06:
        // tolerantTeams([
            // ['alan', 'jj'],
            // ['jj', 'richard'],
            // ['betty', 'richard'],
            // ['jj', 'simcha'],
            // ['richard', 'christine']
        // ]); // -> true

    // test_07:
        // tolerantTeams([
            // ['alan', 'jj'],
            // ['betty', 'richard'],
            // ['betty', 'christine'],
            // ['jj', 'simcha'],
            // ['richard', 'christine']
        // ]); // -> false




// 9. rare routing

    // Write a function, rareRouting, that takes in a number of cities(n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities.The function should return a boolean indicating whether or not there exists a unique route for every pair of cities.A route is a sequence of roads that does not visit a city more than once.
    // Cities will be numbered 0 to n - 1.
    // You can assume that all roads are two - way roads.This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.
    // For example, given these roads:

        // 0 -- - 1
        // | \
        // |  \
        // |   \
        // 2    3

    // There is a unique route for between every pair of cities.
    // So the answer is true.

    // For example, given these roads:

        // 0 -- - 1
        // | \
        // |  \
        // |   \
        // 2 -- 3

    // There are two routes that can be used to travel from city 1 to city 2:
    // - first route: 1, 0, 2
    // - second route: 1, 0, 3, 2
    // The answer is false, because routes should be unique.

    // test_00:
        // rareRouting(4, [
            // [0, 1],
            // [0, 2],
            // [0, 3]
        // ]); // -> true

    // test_01:
        // rareRouting(4, [
            // [0, 1],
            // [0, 2],
            // [0, 3],
            // [3, 2]
        // ]); // -> false

    // test_02:
        // rareRouting(6, [
            // [1, 2],
            // [5, 4],
            // [3, 0],
            // [0, 1],
            // [0, 4],
        // ]); // -> true

    // test_03:
        // rareRouting(6, [
            // [1, 2],
            // [4, 1],
            // [5, 4],
            // [3, 0],
            // [0, 1],
            // [0, 4],
        // ]); // -> false

    // test_04:
        // rareRouting(4, [
            // [0, 1],
            // [3, 2],
        // ]); // -> false





// 10. max increasing subseq

    // Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument.The function should return the length of the longest subsequence of strictly increasing numbers.
    // A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

    // test_00:
        // const numbers = [4, 18, 20, 10, 12, 15, 19];
        // maxIncreasingSubseq(numbers); // -> 5

    // test_01:
        // const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
        // maxIncreasingSubseq(numbers); // -> 4

    // test_02:
        // const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
        // maxIncreasingSubseq(numbers); // -> 5

    // test_03:
        // const numbers = [7, 14, 10, 12];
        // maxIncreasingSubseq(numbers); // -> 3

    // test_04:
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        // maxIncreasingSubseq(numbers); // -> 21

    // test_05:
        // const numbers = [
            // 1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
            // 104,
        // ];
        // maxIncreasingSubseq(numbers); // -> 23

    // test_06:
        // const numbers = [
            // 1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16,
            // 17, 18, 19, 20, 21, 100, 101, 102, 103, 104, 105
        // ];
        // maxIncreasingSubseq(numbers); // -> 27





// 11. positioning plants

    // You've been hired to plant flowers in a garden with n different positions. There are m different flower types. The prices of flowers types vary depending on which position they are planted. Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. What is the minimum cost we need to plant a flower in each position of the garden?
    // Write a function, positioningPlants, that takes in a 2D array with dimensions n * m.Each row of the array represents the costs of the flower types at that position.This means that costs[i][j] represents the cost of planting flower type j at position i.For example:

    // Given these costs,
    // costs = [
        // [4, 3, 7],
        // [6, 1, 9],
        // [2, 5, 3]
    // ]

    // The costs of plants at position 1 are $6, $1, and $9.
    // The cost of planting flower type 0 at position 1 is $6.
    // The cost of planting flower type 2 at position 1 is $9.
    // The function should return the minimum cost of planting flowers without placing the same flower type in adjacent positions.

    // test_00:
        // positioningPlants([
            // [4, 3, 7],
            // [6, 1, 9],
            // [2, 5, 3]
        // ]); // -> 7, by doing 4 + 1 + 2.

    // test_01:
        // positioningPlants([
            // [12, 14, 5],
            // [6, 3, 2]
        // ]); // -> 8

    // test_02:
        // positioningPlants([
            // [12, 14, 5],
            // [6, 3, 2],
            // [4, 2, 7],
            // [4, 8, 4],
            // [1, 13, 5],
            // [8, 6, 7],
        // ]); // -> 23

    // test_03:
        // positioningPlants([
            // [12, 14, 5, 13],
            // [6, 3, 20, 3],
            // [24, 12, 7, 2],
            // [4, 80, 45, 3],
            // [104, 13, 5, 14],
            // [38, 19, 7, 6],
            // [12, 2, 1, 2],
        // ]); // -> 26

    // test_04:
        // positioningPlants([
            // [12, 14, 50, 12],
            // [6, 3, 20, 3],
            // [24, 12, 7, 2],
            // [4, 80, 45, 3],
            // [104, 13, 5, 14],
            // [38, 19, 7, 6],
            // [1, 20, 1, 2],
            // [13, 12, 5, 13],
            // [60, 32, 20, 3],
            // [24, 12, 7, 2],
            // [4, 80, 44, 1],
            // [104, 13, 5, 14],
            // [38, 19, 76, 6],
            // [12, 23, 12, 20],
            // [1, 3, 1, 1],
            // [1, 2, 12, 5],
        // ]); // -> 74

    // test_05:
        // positioningPlants([
            // [12, 14, 50, 12, 13],
            // [6, 3, 20, 3, 16],
            // [24, 12, 7, 2, 74],
            // [4, 80, 45, 3, 100],
            // [104, 13, 5, 14, 3],
            // [38, 19, 7, 6, 24],
            // [1, 20, 1, 2, 31],
            // [13, 12, 5, 13, 9],
            // [60, 32, 20, 3, 2],
            // [24, 12, 7, 2, 42],
            // [4, 80, 44, 1, 23],
            // [104, 13, 5, 14, 28],
            // [38, 19, 76, 6, 12],
            // [12, 23, 12, 20, 13],
            // [1, 3, 1, 1, 50],
            // [1, 2, 12, 5, 36],
            // [6, 2, 3, 12, 20],
            // [4, 6, 4, 11, 15],
        // ]); // -> 75





// 12. breaking boundaries

    // Write a function, breakingBoundaries, that takes in 5 arguments: a number of rows(m), a number of columns(n), a number of moves(k), a starting row(r), and a starting column(c).Say you were situated in a grid with dimensions m * n.If you had to start at position(r, c), in how many different ways could you move out of bounds if you could take at most k moves.A single move is moving one space up, down, left, or right.During a path you may revisit a position.

    // For example:
    // Given m, n, k, r, c:
    // 3, 4, 2, 0, 0

    // This input asks us to count the numbers of ways
    // to move out of bounds in a 3 by 4 grid, starting at
    // position(0, 0) if we could take at most 2 moves.

    // The answer is 4 because of these 4 distinct ways:
    // 1. left
    // 2. up
    // 3. right, up
    // 4. down, left
    // The function should return a number representing how many ways you can move out of bounds.

    // test_00:
        // breakingBoundaries(3, 4, 2, 0, 0); // -> 4
    // test_01:
        // breakingBoundaries(2, 2, 2, 1, 1); // -> 6
    // test_02:
        // breakingBoundaries(3, 4, 3, 0, 0); // -> 11
    // test_03:
        // breakingBoundaries(4, 4, 5, 2, 1); // -> 160
    // test_04:
        // breakingBoundaries(5, 6, 9, 2, 5); // -> 11635
    // test_05:
        // breakingBoundaries(6, 6, 12, 3, 4); // -> 871065
    // test_06:
        // breakingBoundaries(6, 6, 15, 3, 4); // -> 40787896
    // test_07:
        // breakingBoundaries(6, 8, 16, 2, 1); // -> 137495089





// 13. merge sort

    // Write a function, mergeSort, that takes in an array of numbers as an argument.The function should return a new array containing elements of the original array sorted in ascending order.Your function must implement the merge sort algorithm.

    // test_00
        // // const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
        // // mergeSort(numbers);
       //  -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]

    // // test_01
        // // const numbers = [7, -30, -4, -1, 12, 0, 20];
        // // mergeSort(numbers);
       //  -> [ -30, -4, -1, 0, 7, 12, 20 ]

    // // test_02
        // // const numbers = [8, 7, 6, 5, 4, 3, 2, 1, 0];
        // // mergeSort(numbers);
       //  -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

    // // test_03
        // // const numbers = [
       //      // 72, 42, 16, 81, 84, 17, 2, 81, 22, 79, 86, 38,
       //      // 77, 80, 81, 70, 81, 80, 35, 21, 89, 38, 57, 28,
       //      // 4, 17, 50, 38, 68, 82, 22, 76, 45, 40, 67, 94,
       //      // 37, 27, 81, 53, 36, 18, 28, 60, 45, 74, 40, 29,
       //      // 18, 6, 28, 57, 42, 60, 64, 12, 78, 97, 96, 1,
       //      // 20, 20, 61, 67, 82, 10, 63, 71, 39, 52, 37, 69,
       //      // 37, 24, 66, 74, 15, 92, 49, 31, 56, 67, 50, 57,
       //      // 79, 0, 21, 56, 82, 22, 4, 20, 91, 72, 58, 93,
       //      // 99, 14, 42, 91
        // // ];
        // // mergeSort(numbers);
       //  -> [
       //     0,  1,  2,  4,  4,  6, 10, 12, 14, 15, 16, 17,
       //    17, 18, 18, 20, 20, 20, 21, 21, 22, 22, 22, 24,
       //    27, 28, 28, 28, 29, 31, 35, 36, 37, 37, 37, 38,
       //    38, 38, 39, 40, 40, 42, 42, 42, 45, 45, 49, 50,
       //    50, 52, 53, 56, 56, 57, 57, 57, 58, 60, 60, 61,
       //    63, 64, 66, 67, 67, 67, 68, 69, 70, 71, 72, 72,
       //    74, 74, 76, 77, 78, 79, 79, 80, 80, 81, 81, 81,
       //    81, 81, 82, 82, 82, 84, 86, 89, 91, 91, 92, 93,
       //    94, 96, 97, 99
       //  ]

    // // test_04
        // // const numbers = new Array(95000).fill(7);
        // // mergeSort(numbers);
       //  -> [7, 7, 7, 7, 7, ...]

    // // test_05
        // // const numbers = new Array(120000).fill(7);
        // // mergeSort(numbers);
       //  -> [7, 7, 7, 7, 7, ...]





// 14. combine intervals

    // Write a function, combineIntervals, that takes in an array of intervals as an argument.Each interval is an array containing a pair of numbers representing a start and end time.Your function should combine overlapping intervals and return an array containing the combined intervals.

    // For example:
    // Given two intervals:

    // [1, 4] and[3, 7]

    // The intervals overlap and
    // should be combined into:

    // [1, 7]
    // You may return the combined intervals in any order.
    // You can assume that the input array contains at least one interval and all intervals are valid with start < end.

    // test_00
        // // const intervals = [
        //     // [1, 4],
        //     // [12, 15],
        //     // [3, 7],
        //     // [8, 13],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [1, 7], [8, 15] ]

    // // test_01
        // // const intervals = [
        //     // [6, 8],
        //     // [2, 9],
        //     // [10, 12],
        //     // [20, 24],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [2, 9], [10, 12], [20, 24] ]

    // // test_02
        // // const intervals = [
        //     // [3, 7],
        //     // [5, 8],
        //     // [1, 5],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [1, 8] ]

    // // test_03
        // // const intervals = [
        //     // [3, 7],
        //     // [10, 13],
        //     // [5, 8],
        //     // [27, 31],
        //     // [1, 5],
        //     // [12, 16],
        //     // [20, 22],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]

    // // test_04
        // // const intervals = [
        //     // [3, 7],
        //     // [10, 13],
        //     // [5, 8],
        //     // [27, 31],
        //     // [1, 5],
        //     // [12, 16],
        //     // [20, 32],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [1, 8], [10, 16], [20, 32] ]

    // // test_05
        // // const intervals = [
        //     // [64, 70],
        //     // [50, 55],
        //     // [62, 65],
        //     // [12, 50],
        //     // [72, 300000],
        // // ];
        // // combineIntervals(intervals);
        // -> [ [12, 55], [62, 70], [72, 300000] ]
        // //




// 15. binary search

    // Write a function, binarySearch, that takes in a sorted array of numbers and a target.The function should return the index where the target can be found within the array.If the target is not found in the array, then return -1.
    // You may assume that the input array contains unique numbers sorted in increasing order.
    // Your function must implement the binary search algorithm.

    // test_00
        // binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6
    // test_01
        // binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27); // -> -1
    // test_02
        // binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8); // -> 2
    // test_03
        // binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28); // -> 8
    // test_04
        // binarySearch([7, 9], 7); // -> 0
    // test_05
        // binarySearch([7, 9], 9); // -> 1
    // test_06
        // binarySearch([7, 9], 12); // -> -1
    // test_07
        // binarySearch([7], 7); // -> 0
    // test_08
        // binarySearch([], 7); // -> -1




// 16. binary search tree includes

    // Write a function, binarySearchTreeIncludes, that takes in the root of a binary search tree containing numbers and a target value.The function should return a boolean indicating whether or not the target is found within the tree.
    // A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.
    // Your solution should have a best case runtime of O(log(n)).

    // tree a
    // const a = new Node(12);
    // const b = new Node(5);
    // const c = new Node(18);
    // const d = new Node(3);
    // const e = new Node(9);
    // const f = new Node(19);

    // a.left = b;
    // a.right = c;
    // b.left = d;
    // b.right = e;
    // c.right = f;

    //      12
    //    /   \
    //   5     18
    //  / \     \
    // 3   9     19

    // test_00:
        // binarySearchTreeIncludes(a, 9); // -> true
    // test_01:
        // binarySearchTreeIncludes(a, 15); // -> false
    // test_02:
        // binarySearchTreeIncludes(a, 1); // -> false
    // test_03:
        // binarySearchTreeIncludes(a, 12); // -> true
        // tree q
        // const q = new Node(54);
        // const r = new Node(42);
        // const s = new Node(70);
        // const t = new Node(31);
        // const u = new Node(50);
        // const v = new Node(72);
        // const w = new Node(47);
        // const x = new Node(90);

        // q.left = r;
        // q.right = s;
        // r.left = t;
        // r.right = u;
        // s.right = v;
        // u.left = w;
        // v.right = x;

        //       54
        //     /    \
        //    42     70
        //   / \      \
        // 31   50     72
        //     /        \
        //    47         90

    // test_04:
        // binarySearchTreeIncludes(q, 55); // -> false
    // test_05:
        // binarySearchTreeIncludes(q, 47); // -> true
    // test_06:
        // binarySearchTreeIncludes(q, 49); // -> false
    // test_07:
        // binarySearchTreeIncludes(q, 70); // -> true
    // test_08:
        // binarySearchTreeIncludes(q, 100); // -> false




// 17. is binary search tree

    // Write a function, isBinarySearchTree, that takes in the root of a binary tree.The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.
    // A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

    // test_00:
        // const a = new Node(12);
        // const b = new Node(5);
        // const c = new Node(18);
        // const d = new Node(3);
        // const e = new Node(9);
        // const f = new Node(19);

        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;

        //      12
        //    /   \
        //   5     18
        //  / \     \
        // 3   9     19

    // isBinarySearchTree(a); // -> true

    // test_01:
        // const a = new Node(12);
        // const b = new Node(5);
        // const c = new Node(18);
        // const d = new Node(3);
        // const e = new Node(15);
        // const f = new Node(19);

        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;

        //      12
        //    /   \
        //   5     18
        //  / \     \
        // 3   15     19

    // isBinarySearchTree(a); // -> false

    // test_02:

        // const a = new Node(12);
        // const b = new Node(5);
        // const c = new Node(19);
        // const d = new Node(3);
        // const e = new Node(9);
        // const f = new Node(19);

        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;

        //      12
        //    /   \
        //   5     19
        //  / \     \
        // 3   9     19

    // isBinarySearchTree(a); // -> true

    // test_03:
        // const a = new Node(12);
        // const b = new Node(5);
        // const c = new Node(10);
        // const d = new Node(3);
        // const e = new Node(9);
        // const f = new Node(19);

        // a.left = b;
        // a.right = c;
        // b.left = d;
        // b.right = e;
        // c.right = f;

        //      12
        //    /   \
        //   5     10
        //  / \     \
        // 3   9     19

    // isBinarySearchTree(a); // -> false

    // test_04:

        // const q = new Node(54);
        // const r = new Node(42);
        // const s = new Node(70);
        // const t = new Node(31);
        // const u = new Node(50);
        // const v = new Node(72);
        // const w = new Node(47);
        // const x = new Node(90);

        // q.left = r;
        // q.right = s;
        // r.left = t;
        // r.right = u;
        // s.right = v;
        // u.left = w;
        // v.right = x;

        //       54
        //     /    \
        //    42     70
        //   / \      \
        // 31   50     72
        //     /        \
        //    47         90

    // isBinarySearchTree(q); // -> true