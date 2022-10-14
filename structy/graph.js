// 1. closest carrot
    // Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.The function should return a number representing the length of the shortest path from the starting position to a carrot.You may move up, down, left, or right, but cannot pass through walls(X).If there is no possible path to a carrot, then return -1.

    // test_00:
        // const grid = [
            // ['O', 'O', 'O', 'O', 'O'],
            // ['O', 'X', 'O', 'O', 'O'],
            // ['O', 'X', 'X', 'O', 'O'],
            // ['O', 'X', 'C', 'O', 'O'],
            // ['O', 'X', 'X', 'O', 'O'],
            // ['C', 'O', 'O', 'O', 'O'],
        // ];
        //
        // closestCarrot(grid, 1, 2); // -> 4

    // test_01:
        // const grid = [
            // ['O', 'O', 'O', 'O', 'O'],
            // ['O', 'X', 'O', 'O', 'O'],
            // ['O', 'X', 'X', 'O', 'O'],
            // ['O', 'X', 'C', 'O', 'O'],
            // ['O', 'X', 'X', 'O', 'O'],
            // ['C', 'O', 'O', 'O', 'O'],
        // ];
        //
        // closestCarrot(grid, 0, 0); // -> 5

    // test_02:
        // const grid = [
            // ['O', 'O', 'X', 'X', 'X'],
            // ['O', 'X', 'X', 'X', 'C'],
            // ['O', 'X', 'O', 'X', 'X'],
            // ['O', 'O', 'O', 'O', 'O'],
            // ['O', 'X', 'X', 'X', 'X'],
            // ['O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'C', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O'],
        // ];
        //
        // closestCarrot(grid, 3, 4); // -> 9
        // test_03:
        // const grid = [
            // ['O', 'O', 'X', 'O', 'O'],
            // ['O', 'X', 'X', 'X', 'O'],
            // ['O', 'X', 'C', 'C', 'O'],
        // ];
        //
        // closestCarrot(grid, 1, 4); // -> 2

    // test_04:
        // const grid = [
            // ['O', 'O', 'X', 'O', 'O'],
            // ['O', 'X', 'X', 'X', 'O'],
            // ['O', 'X', 'C', 'C', 'O'],
        // ];
        //
        // closestCarrot(grid, 2, 0); // -> -1

    // test_05:
        // const grid = [
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
            // ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
        // ];
        //
        // closestCarrot(grid, 0, 0); // -> -1





// longest path
    // Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph.The function should return the length of the longest path within the graph.A path may start and end at any two nodes.The length of a path is considered the number of edges in the path, not the number of nodes.

    // test_00:
    //     const graph = {
    //         a: ['c', 'b'],
    //         b: ['c'],
    //         c: []
    //     };

    //     longestPath(graph); // -> 2

    // test_01:
    //     const graph = {
    //         a: ['c', 'b'],
    //         b: ['c'],
    //         c: [],
    //         q: ['r'],
    //         r: ['s', 'u', 't'],
    //         s: ['t'],
    //         t: ['u'],
    //         u: []
    //     };

    //     longestPath(graph); // -> 4

    // test_02:
    //     const graph = {
    //         h: ['i', 'j', 'k'],
    //         g: ['h'],
    //         i: [],
    //         j: [],
    //         k: [],
    //         x: ['y'],
    //         y: []
    //     };

    //     longestPath(graph); // -> 2

    // test_03:
    //     const graph = {
    //         a: ['b'],
    //         b: ['c'],
    //         c: [],
    //         e: ['f'],
    //         f: ['g'],
    //         g: ['h'],
    //         h: []
    //     };

    //     longestPath(graph); // -> 3




// semesters required
    // Write a function, semestersRequired, that takes in a number of courses(n) and a list of prerequisites as arguments.Courses have ids ranging from 0 through n - 1. A single prerequisite of[A, B] means that course A must be taken before course B.Return the minimum number of semesters required to complete all n courses.There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.
    // Note that given prerequisite[A, B], you cannot take course A and course B concurrently in the same semester.You must take A in some semester before B.
    // You can assume that it is possible to eventually complete all courses.

    // test_00:
        // const numCourses = 6;
        // const prereqs = [
            // [1, 2],
            // [2, 4],
            // [3, 5],
            // [0, 5],
        // ];
        // semestersRequired(numCourses, prereqs); // -> 3

    // test_01:
        // const numCourses = 7;
        // const prereqs = [
            // [4, 3],
            // [3, 2],
            // [2, 1],
            // [1, 0],
            // [5, 2],
            // [5, 6],
        // ];
        // semestersRequired(numCourses, prereqs); // -> 5

    // test_02:
        // const numCourses = 5;
        // const prereqs = [
            // [1, 0],
            // [3, 4],
            // [1, 2],
            // [3, 2],
        // ];
        // semestersRequired(numCourses, prereqs); // -> 2

    // test_03:
        // const numCourses = 12;
        // const prereqs = [];
        // semestersRequired(numCourses, prereqs); // -> 1

    // test_04:
        // const numCourses = 3;
        // const prereqs = [
            // [0, 2],
            // [0, 1],
            // [1, 2],
        // ];
        // semestersRequired(numCourses, prereqs); // -> 3

    // test_05:
        // const numCourses = 6;
        // const prereqs = [
            // [3, 4],
            // [3, 0],
            // [3, 1],
            // [3, 2],
            // [3, 5],
        // ];
        // semestersRequired(numCourses, prereqs); // -> 2





// best bridge

    // Write a function, bestBridge, that takes in a grid as an argument.The grid contains water(W) and land(L).There are exactly two islands in the grid.An island is a vertically or horizontally connected region of land.Return the minimum length bridge needed to connect the two islands.A bridge does not need to form a straight line.

    // test_00:
        // const grid = [
            // ["W", "W", "W", "L", "L"],
            // ["L", "L", "W", "W", "L"],
            // ["L", "L", "L", "W", "L"],
            // ["W", "L", "W", "W", "W"],
            // ["W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W"],
        // ];
        // bestBridge(grid); // -> 1

    // test_01:
        // const grid = [
            // ["W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W"],
            // ["L", "L", "W", "W", "L"],
            // ["W", "L", "W", "W", "L"],
            // ["W", "W", "W", "L", "L"],
            // ["W", "W", "W", "W", "W"],
        // ];
        // bestBridge(grid); // -> 2

    // test_02:
        // const grid = [
            // ["W", "W", "W", "W", "W"],
            // ["W", "W", "W", "L", "W"],
            // ["L", "W", "W", "W", "W"],
        // ];
        // bestBridge(grid); // -> 3

    // test_03:
        // const grid = [
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "L", "W", "W"],
            // ["W", "W", "W", "W", "L", "L", "W", "W"],
            // ["W", "W", "W", "W", "L", "L", "L", "W"],
            // ["W", "W", "W", "W", "W", "L", "L", "L"],
            // ["L", "W", "W", "W", "W", "L", "L", "L"],
            // ["L", "L", "L", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
        // ];
        // bestBridge(grid); // -> 3

    // test_04:
        // const grid = [
            // ["L", "L", "L", "L", "L", "L", "L", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "L", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "W", "W", "W", "W", "W", "W", "L"],
            // ["L", "L", "L", "L", "L", "L", "L", "L"],
        // ];
        // bestBridge(grid); // -> 2

    // test_05:
        // const grid = [
            // ["W", "L", "W", "W", "W", "W", "W", "W"],
            // ["W", "L", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "W", "W"],
            // ["W", "W", "W", "W", "W", "W", "L", "W"],
            // ["W", "W", "W", "W", "W", "W", "L", "L"],
            // ["W", "W", "W", "W", "W", "W", "W", "L"],
        // ];
        // bestBridge(grid); // -> 8




// has cycle

    // Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph.The function should return a boolean indicating whether or not the graph contains a cycle.

    // test_00:
        // hasCycle({
            // a: ["b"],
            // b: ["c"],
            // c: ["a"],
        // }); // -> true

    // test_01:
        // hasCycle({
            // a: ["b", "c"],
            // b: ["c"],
            // c: ["d"],
            // d: [],
        // }); // -> false

    // test_02:
        // hasCycle({
            // a: ["b", "c"],
            // b: [],
            // c: [],
            // e: ["f"],
            // f: ["e"],
        // }); // -> true

    // test_03:
        // hasCycle({
            // q: ["r", "s"],
            // r: ["t", "u"],
            // s: [],
            // t: [],
            // u: [],
            // v: ["w"],
            // w: [],
            // x: ["w"],
        // }); // -> false

    // test_04:
        // hasCycle({
            // a: ["b"],
            // b: ["c"],
            // c: ["a"],
            // g: [],
        // }); // -> true

    // test_05:
        // hasCycle({
            // a: ["b"],
            // b: ["c"],
            // c: ["d"],
            // d: ["b"],
        // }); // -> true





// prereqs possible

    // Write a function, prereqsPossible, that takes in a number of courses(n) and prerequisites as arguments.Courses have ids ranging from 0 through n - 1. A single prerequisite of[A, B] means that course A must be taken before course B.The function should return a boolean indicating whether or not it is possible to complete all courses.

    // test_00:
        // const numCourses = 6;
        // const prereqs = [
            // [0, 1],
            // [2, 3],
            // [0, 2],
            // [1, 3],
            // [4, 5],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> true
        
    // test_01:
        // const numCourses = 6;
        // const prereqs = [
            // [0, 1],
            // [2, 3],
            // [0, 2],
            // [1, 3],
            // [4, 5],
            // [3, 0],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> false
        
    // test_02:
        // const numCourses = 5;
        // const prereqs = [
            // [2, 4],
            // [1, 0],
            // [0, 2],
            // [0, 4],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> true
        
    // test_03:
        // const numCourses = 6;
        // const prereqs = [
            // [2, 4],
            // [1, 0],
            // [0, 2],
            // [0, 4],
            // [5, 3],
            // [3, 5],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> false
        
    // test_04:
        // const numCourses = 8;
        // const prereqs = [
            // [1, 0],
            // [0, 6],
            // [2, 0],
            // [0, 5],
            // [3, 7],
            // [4, 3],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> true
        
    // test_05:
        // const numCourses = 8;
        // const prereqs = [
            // [1, 0],
            // [0, 6],
            // [2, 0],
            // [0, 5],
            // [3, 7],
            // [7, 4],
            // [4, 3],
        // ];
        // prereqsPossible(numCourses, prereqs); // -> false
        
    // test_06:
        // const numCourses = 42;
        // const prereqs = [[6, 36]];
        // prereqsPossible(numCourses, prereqs); // -> true