// paired parentheses

    // Write a function, pairedParentheses, that takes in a string as an argument.The function should return a boolean indicating whether or not the string has well - formed parentheses.
    // You may assume the string contains only alphabetic characters, '(', or ')'.

    // test_00:
        // pairedParentheses("(david)((abby))"); // -> true
    // test_01:
        // pairedParentheses("()rose(jeff"); // -> false
    // test_02:
        // pairedParentheses(")("); // -> false
    // test_03:
        // pairedParentheses("()"); // -> true
    // test_04:
        // pairedParentheses("(((potato())))"); // -> true
    // test_05:
        // pairedParentheses("(())(water)()"); // -> true
    // test_06:
        // pairedParentheses("(())(water()()"); // -> false
    // test_07:
        // pairedParentheses(""); // -> true
    // test_08:
        // pairedParentheses("))()"); // -> false




// befitting brackets

    // Write a function, befittingBrackets, that takes in a string as an argument.The function should return a boolean indicating whether or not the string contains correctly matched brackets.
    // You may assume the string contains only characters: ( )[] { }

    // test_00:
        // befittingBrackets('(){}[](())'); // -> true
    // test_01:
        // befittingBrackets('({[]})'); // -> true
    // test_02:
        // befittingBrackets('[][}'); // -> false
    // test_03:
        // befittingBrackets('{[]}({}'); // -> false
    // test_04:
        // befittingBrackets('[]{}(}[]'); // -> false
    // test_05:
        // befittingBrackets('[]{}()[]'); // -> true
    // test_06:
        // befittingBrackets(']{}'); // -> false
    // test_07:
        // befittingBrackets(''); // -> true
    // test_08:
        // befittingBrackets('{[(}])'); // -> false




// decompress braces

    // Write a function, decompressBraces, that takes in a compressed string as an argument.The function should return the string decompressed.
    // The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
    // You may assume that every number n is guaranteed to be an integer between 1 through 9.
    // You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

    // test_00:
        // decompressBraces("2{q}3{tu}v");
        // -> qqtututuv 
    // test_01:
        // decompressBraces("ch3{ao}");
        // -> chaoaoao
    // test_02:
        // decompressBraces("2{y3{o}}s");
        // -> yoooyooos
    // test_03:
        // decompressBraces("z3{a2{xy}b}");
        // -> zaxyxybaxyxybaxyxyb 
    // test_04:
        // decompressBraces("2{3{r4{e}r}io}");
        // -> reeeerreeeerreeeerioreeeerreeeerreeeerio 
    // test_05:
        // decompressBraces("go3{spinn2{ing}s}");
        // -> gospinningingsspinningingsspinningings 
    // test_06:
        // decompressBraces("2{l2{if}azu}l");
        // -> lififazulififazul 
    // test_07:
        // decompressBraces("3{al4{ec}2{icia}}");
        // -> alececececiciaiciaalececececiciaiciaalececececiciaicia 





// nesting score

    // Write a function, nestingScore, that takes in a string of brackets as an argument.The function should return the score of the string according to the following rules:
    // [] is worth 1 point
    // XY is worth m + n points where X, Y are substrings of well - formed brackets and m, n are their respective scores
    // [S] is worth 2 * k points where S is a substring of well - formed brackets and k is the score of that substring
    // You may assume that the input only contains well - formed square brackets.

    // test_00:
        // nestingScore("[]"); // -> 1
    // test_01:
        // nestingScore("[][][]"); // -> 3
    // test_02:
        // nestingScore("[[]]"); // -> 2
    // test_03:
        // nestingScore("[[][]]"); // -> 4
    // test_04:
        // nestingScore("[[][][]]"); // -> 6
    // test_05:
        // nestingScore("[[][]][]"); // -> 5
    // test_06:
        // nestingScore("[][[][]][[]]"); // -> 7
    // test_07:
        // nestingScore("[[[[[[[][]]]]]]][]"); // -> 129