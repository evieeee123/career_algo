// overlap subsequence

    // Write a function, overlapSubsequence, that takes in two strings as arguments.The function should return the length of the longest overlapping subsequence.
    // A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

    // test_00:
    //     overlapSubsequence("dogs", "daogt"); // -> 3
    // test_01:
    //     overlapSubsequence("xcyats", "criaotsi"); // -> 4
    // test_02:
    //     overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
    // test_03:
    //     overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
    // test_04:
    //     overlapSubsequence(
    //         "mumblecorebeardleggingsauthenticunicorn",
    //         "succulentspughumblemeditationlocavore"
    //     ); // -> 15





// can concat

    // Write a function, canConcat, that takes in a string and an array of words as arguments.The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
    // You may reuse words of the array as many times as needed.

    // test_00:
        // canConcat("oneisnone", ["one", "none", "is"]); // -> true
    // test_01:
        // canConcat("oneisnone", ["on", "e", "is"]); // -> false
    // test_02:
        // canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
    // test_03:
        // canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
    // test_04:
        // canConcat("santahat", ["santah", "hat"]); // -> false
    // test_05:
        // canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
    // test_06:
        // canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
    // test_07:
        // canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true





// quickest concat
    // Write a function, quickestConcat, that takes in a string and an array of words as arguments.The function should return the minimum number of words needed to build the string by concatenating words of the array.
    // You may use words of the array as many times as needed.

    // test_00:
        // quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
    // test_01:
        // quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
    // test_02:
        // quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
    // test_03:
        // quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
    // test_04:
        // quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
    // test_05:
        // quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
    // test_06:
        // quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
    // test_07:
        // quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7