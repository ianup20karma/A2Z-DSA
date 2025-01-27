function printPattern(n) {

  // Pattern 1:
  // * * * * *
  // * * * * *
  // * * * * *
  // * * * * *
  // * * * * *

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   for (let j = 0; j < n; j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 2:
  // * 
  // * * 
  // * * *
  // * * * *
  // * * * * *

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   for (let j = 0; j <= i; j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 3:
  // 1
  // 1 2
  // 1 2 3
  // 1 2 3 4
  // 1 2 3 4 5

  // for (let i = 1; i <= n; i++) {
  //   let str = "";
  //   for (let j = 1; j <= i; j++) {
  //     str += j;
  //   }
  //   console.log(str);
  // }

  // Pattern 4:
  // 1
  // 2 2
  // 3 3 3
  // 4 4 4 4
  // 5 5 5 5 5

  // for (let i = 1; i <= n; i++) {
  //   let str = "";
  //   for (let j = 1; j <= i; j++) {
  //     str += i;
  //   }
  //   console.log(str);
  // }

  // Pattern 5:
  // * * * * * 
  // * * * * 
  // * * * 
  // * * 
  // * 

  // for (let i = 1; i <= n; i++) {
  //   let str = ""
  //   for (let j = 0; j < (n - i + 1); j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 6:
  // 1 2 3 4 5
  // 1 2 3 4
  // 1 2 3
  // 1 2 
  // 1

  // for (let i = 1; i <= n; i++) {
  //   let str = ""
  //   for (let j = 1; j <= (n - i + 1); j++) {
  //     str += j;
  //   }
  //   console.log(str);
  // }

  // Pattern 7:
  //     *
  //    ***
  //   *****
  //  *******
  // *********

  // for (let i = 0; i < n; i++) {
  //   let str = ""
  //   for (let j = 0; j < (n - i - 1); j++) {
  //     str += " ";
  //   }
  //   for (let k = 0; k < (2 * i + 1); k++) {
  //     str += "*";
  //   }
  //   for (let j = 0; j < (n - i - 1); j++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 8:
  // *********
  //  *******
  //   *****
  //    ***
  //     *

  // for (let i = 0; i < n; i++) {
  //   let str = ""
  //   for (let j = 0; j < i; j++) {
  //     str += " ";
  //   }
  //   for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
  //     str += "*";
  //   }
  //   for (let j = 0; j < i; j++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 9:
  //     *
  //    ***
  //   *****
  //  *******
  // *********
  // *********
  //  *******
  //   *****
  //    ***
  //     *

  // ERECT PYRAMID
  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   for (let j = 0; j < (n - i - 1); j++) {
  //     str += " ";
  //   }
  //   for (let k = 0; k < (2 * i + 1); k++) {
  //     str += "*";
  //   }
  //   for (let j = 0; j < (n - i - 1); j++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // INVERTED PYRAMID
  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   for (let j = 0; j < i; j++) {
  //     str += " ";
  //   }
  //   for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
  //     str += "*";
  //   }
  //   for (let j = 0; j < i; j++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 10:
  // *
  // **
  // ***
  // ****
  // *****
  // ****
  // ***
  // **
  // *

  // for (let i = 1; i <= 2 * n - 1; i++) {
  //   let str = "";
  //   let star = i > n ? (2 * n - i) : i;
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   for (let k = 0; k < n - i - 1; k++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 11:
  // 1 
  // 0 1 
  // 1 0 1 
  // 0 1 0 1 
  // 1 0 1 0 1 

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   let num = i % 2 == 0 ? 1 : 0;
  //   for (let j = 0; j <= i; j++) {
  //     str += `${num} `;
  //     num = 1 - num;
  //   }
  //   console.log(str);
  // }

  // Pattern 12:
  // 1        1
  // 12      21
  // 123    321
  // 1234  4321
  // 1234554321

  // for (let i = 1; i <= n; i++) {
  //   let str = "";
  //   const spaces = 2 * n - (2 * i);
  //   for (let j = 1; j <= i; j++) {
  //     str += j;
  //   }
  //   for (let k = 0; k < spaces; k++) {
  //     str += " ";
  //   }
  //   for (let j = i; j >= 1; j--) {
  //     str += j;
  //   }
  //   console.log(str);
  // }

  // Pattern 13:
  // 1
  // 2  3
  // 4  5  6
  // 7  8  9  10
  // 11  12  13  14  15

  // let num = 1;
  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   for (let j = 0; j <= i; j++) {
  //     str += `${num} `;
  //     num += 1;
  //   }
  //   console.log(str);
  // }

  // Pattern 14:
  // A
  // AB
  // ABC
  // ABCD
  // ABCDE

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   // ASCII value for A = 65
  //   for (let j = 65; j <= 65 + i; j++) {
  //     str += String.fromCharCode(j);
  //   }
  //   console.log(str);
  // }

  // Pattern 15:
  // ABCDE 
  // ABCD
  // ABC
  // AB
  // A

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   // ASCII value for A = 65
  //   for (let j = 0; j < n - i; j++) {
  //     str += String.fromCharCode(65 + j);
  //   }
  //   console.log(str);
  // }

  // Pattern 16:
  // A 
  // BB
  // CCC
  // DDDD
  // EEEEE

  // for (let i = 0; i < n; i++) {
  //   let str = "";
  //   // ASCII value for A = 65
  //   for (let j = 0; j <= i; j++) {
  //     str += String.fromCharCode(65 + i);
  //   }
  //   console.log(str);
  // }

  // Pattern 17:
  //     A
  //    ABA
  //   ABCBA
  //  ABCDCBA
  // ABCDEDCBA

  // for (let i = 0; i < n; i++) {
  //   let str = ""
  //   for (let j = 0; j < (n - i - 1); j++) {
  //     str += " ";
  //   }
  //   for (let k = 0; k <= i; k++) {
  //     str += String.fromCharCode(65 + k);
  //   }
  //   for (let l = i; l >= 1; l--) {
  //     str += String.fromCharCode(65 + l - 1);
  //   }
  //   for (let m = 0; m < (n - i - 1); m++) {
  //     str += " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 18:
  // E
  // DE
  // CDE
  // BCDE
  // ABCDE

  // for (let i = 0; i < n; i++) {
  //   let str = ""
  //   for (let k = 0; k <= i; k++) {
  //     str += String.fromCharCode(65 + n - 1 - i + k) + " ";
  //   }
  //   console.log(str);
  // }

  // Pattern 19:
  // **********
  // ****  ****
  // ***    ***
  // **      **
  // *        *
  // *        *
  // **      **
  // ***    ***
  // ****  ****
  // **********

  // for (let i = 0; i < 2 * n; i++) {
  //   let str = "";
  //   let star = i >= n ? i - n + 1 : n - i;
  //   let spaces = i >= n ? 2 * (2 * n - i - 1) : 2 * i;
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   for (let k = 0; k < spaces; k++) {
  //     str += " ";
  //   }
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 20:
  // *        *
  // **      **
  // ***    ***
  // ****  ****
  // **********
  // ****  ****
  // ***    ***
  // **      **
  // *        *

  // for (let i = 1; i <= 2 * n - 1; i++) {
  //   let str = "";
  //   let star = i > n ? (2 * n - i) : i;
  //   let spaces = i > n ? 2 * (i - n) : (2 * n) - (2 * i);
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   for (let k = 0; k < spaces; k++) {
  //     str += " ";
  //   }
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 21:
  // ******
  // *    *
  // *    *
  // *    *
  // *    *
  // ******

  // for (let i = 1; i <= n; i++) {
  //   let str = "";
  //   let star = i == 1 || i == n ? n - 1 : 1;
  //   let spaces = i == 1 || i == n ? 0 : n - 2;
  //   for (let j = 0; j < star; j++) {
  //     str += "*";
  //   }
  //   for (let k = 0; k < spaces; k++) {
  //     str += " ";
  //   }
  //   for (let j = 0; j < 1; j++) {
  //     str += "*";
  //   }
  //   console.log(str);
  // }

  // Pattern 22:
  // 6 6 6 6 6 6 6 6 6 6 6 
  // 6 5 5 5 5 5 5 5 5 5 6 
  // 6 5 4 4 4 4 4 4 4 5 6 
  // 6 5 4 3 3 3 3 3 4 5 6 
  // 6 5 4 3 2 2 2 3 4 5 6 
  // 6 5 4 3 2 1 2 3 4 5 6 
  // 6 5 4 3 2 2 2 3 4 5 6 
  // 6 5 4 3 3 3 3 3 4 5 6 
  // 6 5 4 4 4 4 4 4 4 5 6 
  // 6 5 5 5 5 5 5 5 5 5 6 
  // 6 6 6 6 6 6 6 6 6 6 6
}

const input = 6;
printPattern(input);