//Uncompress

// Write a function, uncompress, that takes in a string as an argument.The input string will be formatted into multiple groups according to the following pattern:
    {/* <number><char> */}

    // for example, '2c' or '3a'.
    // The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

    // test_00:
    //     uncompress("2c3a1t"); // -> 'ccaaat'
    // test_01:
    //     uncompress("4s2b"); // -> 'ssssbb'
    // test_02:
    //     uncompress("2p1o5p"); // -> 'ppoppppp'
    // test_03:
    //     uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
    // test_04:
    //     uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'






// Compress

// Write a function, compress, that takes in a string as an argument.The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

    // test_00:
    //     compress('ccaaatsss'); // -> '2c3at3s'
    // test_01:
    //     compress('ssssbbz'); // -> '4s2bz'
    // test_02:
    //     compress('ppoppppp'); // -> '2po5p'
    // test_03:
    //     compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
    // test_04:
    //     compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    // // -> '127y'





// anagrams
// Write a function, anagrams, that takes in two strings as arguments.The function should return a boolean indicating whether or not the strings are anagrams.Anagrams are strings that contain the same characters, but in any order.

    // test_00:
    //     anagrams('restful', 'fluster'); // -> true
    // test_01:
    //     anagrams('cats', 'tocs'); // -> false
    // test_02:
    //     anagrams('monkeyswrite', 'newyorktimes'); // -> true
    // test_03:
    //     anagrams('paper', 'reapa'); // -> false
    // test_04:
    //     anagrams('elbow', 'below'); // -> true
    // test_05:
    //     anagrams('tax', 'taxi'); // -> false
    // test_06:
    //     anagrams('taxi', 'tax'); // -> false
    // test_07:
    //     anagrams('night', 'thing'); // -> true
    // test_08:
    //     anagrams('abbc', 'aabc'); // -> false
    // test_09:
    //     anagrams('po', 'popp'); // -> false
    // test_10:
    //     anagrams('pp', 'oo') // -> false





// most frequent char
    // Write a function, mostFrequentChar, that takes in a string as an argument.The function should return the most frequent character of the string.If there are ties, return the character that appears earlier in the string.

    // You can assume that the input string is non - empty.

    // test_00:
    //     mostFrequentChar('bookeeper'); // -> 'e'
    // test_01:
    //     mostFrequentChar('david'); // -> 'd'
    // test_02:
    //     mostFrequentChar('abby'); // -> 'b'
    // test_03:
    //     mostFrequentChar('mississippi'); // -> 'i'
    // test_04:
    //     mostFrequentChar('potato'); // -> 'o'
    // test_05:
    //     mostFrequentChar('eleventennine'); // -> 'e'
    // test_06:
    //     mostFrequentChar("riverbed"); // -> 'r'





// pair sum
    // Write a function, pairSum, that takes in an array and a target sum as arguments.The function should return an array containing a pair of indices whose elements sum to the given target.The indices returned must be unique.
    // 
    // Be sure to return the indices, not the elements themselves.
    // 
    // There is guaranteed to be one such pair that sums to the target.

    // test_00:
    //     pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
    // test_01:
    //     pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
    // test_02:
    //     pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
    // test_03:
    //     pairSum([1, 6, 7, 2], 13); // -> [1, 2]
    // test_04:
    //     pairSum([9, 9], 18); // -> [0, 1]
    // test_05:
    //     pairSum([6, 4, 2, 8], 12); // -> [1, 3]





// pair product
    // Write a function, pairProduct, that takes in an array and a target product as arguments.The function should return an array containing a pair of indices whose elements multiply to the given target.The indices returned must be unique.
    // 
    // Be sure to return the indices, not the elements themselves.
    // 
    // There is guaranteed to be one such pair whose product is the target.

    // test_00:
    //     pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
    // test_01:
    //     pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
    // test_02:
    //     pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
    // test_03:
    //     pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
    // test_04:
    //     pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
    // test_05:
    //     pairProduct([4, 6, 8, 2], 16); // -> [2, 3]




// intersection
    // Write a function, intersection, that takes in two arrays, a, b, as arguments.The function should return a new array containing elements that are in both of the two arrays.
    // You may assume that each input array does not contain duplicate elements.

    // test_00:
    //     intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) // -> [2,6]
    // test_01:
    //     intersection([2, 4, 6], [4, 2]) // -> [2,4]
    // test_02:
    //     intersection([4, 2, 1], [1, 2, 4, 6]) // -> [1,2,4]
    // test_03:
    //     intersection([0, 1, 2], [10, 11]) // -> []
    // test_04:
    //     const a = [];
    //     const b = [];
    //     for (let i = 0; i < 50000; i += 1) {
    //         a.push(i);
    //         b.push(i);
    //     }
    //     intersection(a, b) // -> [0,1,2,3,..., 49999]




// five sort

    // Write a function, fiveSort, that takes in an array of numbers as an argument.The function should rearrange elements of the array such that all 5s appear at the end.Your function should perform this operation in -place by mutating the original array.The function should return the array.
    // Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

    // test_00
    //     fiveSort([12, 5, 1, 5, 12, 7]);
    //     // -> [12, 7, 1, 12, 5, 5] 
    // test_01
    //     fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
    //     // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
    // test_02
    //     fiveSort([5, 5, 5, 1, 1, 1, 4]);
    //     // -> [4, 1, 1, 1, 5, 5, 5] 
    // test_03
    //     fiveSort([5, 5, 6, 5, 5, 5, 5]);
    //     // -> [6, 5, 5, 5, 5, 5, 5] 
    // test_04
    //     fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
    //     // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
    // test_05
    //     const fives = new Array(20000).fill(5);
    //     const fours = new Array(20000).fill(4);
    //     const nums = [...fives, ...fours];
    //     fiveSort(nums);
    //     // twenty-thousand 4s followed by twenty-thousand 5s
    //     // -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
