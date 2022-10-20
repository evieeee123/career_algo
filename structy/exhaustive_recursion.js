// subsets

    // Write a function, subsets, that takes in an array as an argument.The function should return a 2D array where each subarray represents one of the possible subsets of the array.
    // The elements within the subsets and the subsets themselves may be returned in any order.
    // You may assume that the input array contains unique elements.

    // test_00:
        // subsets(['a', 'b']); // ->
        // [
        //   [],
        //   [ 'b' ],
        //   [ 'a' ],
        //   [ 'a', 'b' ]
        // ]
    // test_01:
        // subsets(['a', 'b', 'c']); // ->
        // [
        //   [],
        //   [ 'c' ],
        //   [ 'b' ],
        //   [ 'b', 'c' ],
        //   [ 'a' ],
        //   [ 'a', 'c' ],
        //   [ 'a', 'b' ],
        //   [ 'a', 'b', 'c' ]
        // ]
    // test_02:
        // subsets(['x']); // ->
        // [
        //   [],
        //   [ 'x' ]
        // ]
    // test_03:
        // subsets([]); // ->
        // [
        //   []
        // ]
    // test_04:
        // subsets(['q', 'r', 's', 't']); // ->
        // [
        //   [],
        //   [ 't' ],
        //   [ 's' ],
        //   [ 's', 't' ],
        //   [ 'r' ],
        //   [ 'r', 't' ],
        //   [ 'r', 's' ],
        //   [ 'r', 's', 't' ],
        //   [ 'q' ],
        //   [ 'q', 't' ],
        //   [ 'q', 's' ],
        //   [ 'q', 's', 't' ],
        //   [ 'q', 'r' ],
        //   [ 'q', 'r', 't' ],
        //   [ 'q', 'r', 's' ],
        //   [ 'q', 'r', 's', 't' ]
        // ]




// permutations

    // Write a function, permutations, that takes in an array an argument.The function should return a 2D array where each subarray represents one of the possible permutations of the array.
    // The subarrays may be returned in any order.
    // You may assume that the input array contains unique elements.

    // test_00:
        // permutations(['a', 'b', 'c']); // ->
        // [
        //   [ 'a', 'b', 'c' ],
        //   [ 'b', 'a', 'c' ],
        //   [ 'b', 'c', 'a' ],
        //   [ 'a', 'c', 'b' ],
        //   [ 'c', 'a', 'b' ],
        //   [ 'c', 'b', 'a' ]
        // ]
    // test_01:
        // permutations(['red', 'blue']); // ->
        // [
        //   [ 'red', 'blue' ],
        //   [ 'blue', 'red' ]
        // ]
    // test_02:
        // permutations([8, 2, 1, 4]); // ->
        // [
        //   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ],
        //   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ],
        //   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ],
        //   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ],
        //   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ],
        //   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ],
        //   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ],
        //   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ],
        //   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ],
        //   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ],
        //   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ],
        //   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ]
        // ]
    // test_03:
        // permutations([]); // ->
        // [
        //  [ ]
        // ]





// create combinations

    // Write a function, createCombinations, that takes in an array and a length as arguments.The function should return a 2D array representing all of the combinations of the specifized length.
    // The items within the combinations and the combinations themselves may be returned in any order.
    // You may assume that the input array contains unique elements and 1 <= k <= items.length.

    // test_00:
        // createCombinations(["a", "b", "c"], 2); // ->
        // [
        //   [ 'a', 'b' ],
        //   [ 'a', 'c' ],
        //   [ 'b', 'c' ]
        // ]
    // test_01:
        // createCombinations(["q", "r", "s", "t"], 2); // ->
        // [
        //   [ 'q', 'r' ],
        //   [ 'q', 's' ],
        //   [ 'q', 't' ],
        //   [ 'r', 's' ],
        //   [ 'r', 't' ],
        //   [ 's', 't' ]
        // ]
    // test_02:
        // createCombinations(['q', 'r', 's', 't'], 3)); // ->
        // [
        //   [ 'q', 'r', 's' ],
        //   [ 'q', 'r', 't' ],
        //   [ 'q', 's', 't' ],
        //   [ 'r', 's', 't' ]
        // ]
    // test_03:
        // createCombinations([1, 28, 94], 3); // ->
        // [
        //   [ 1, 28, 94 ]
        // ]
