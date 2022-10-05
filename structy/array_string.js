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
    







