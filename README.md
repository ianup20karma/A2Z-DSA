# A2Z-DSA
Journey of Learning DSA from A2Z From Striver (Raj Vikramaditya)

<h1>Roadmap:</h1>

- <h3>Language Basics</h3>

        C++ / Java / Python / JavaScript

- <h3>OOPs Basics</h3>

- <h3>Input/Output</h3>

   *Complete the function printNumber which takes an integer input from the user and prints it on the screen.*

  ```
    class Solution {
        printNumber(value) {
            console.log(value);
        }
    }
  ```

- <h3>If/Else</h3>

  *Given an integer age, print on the screen: Adult if age >= 18, Teen if age < 18*

  ```
    class Solution {
        isAdult(age) {
            if (age >= 18) {
                console.log("Adult");
            } else {
                console.log("Teen");
            }
        }
    }
  ```

- <h3>If/else if/else</h3>

  *Given marks of a student, print on the screen:
Grade A if marks >= 90, Grade B if marks >= 70, Grade C if marks >= 50, Grade D if marks >= 35, Fail, otherwise.*

  ```
    class Solution {
        studentGrade(marks) {
            if (marks >= 90) { 
                console.log("Grade A"); 
            } else if (marks >= 70) { 
                console.log("Grade B"); 
            } else if (marks >= 50) { 
                console.log("Grade C"); 
            } else if (marks >= 35) { 
                console.log("Grade D"); 
            } else { 
                console.log("Fail"); 
            }
        }
    }
  ```

- <h3>Switch Case</h3>

  *Given the integer day denoting the day number, print on the screen which day of the week it is.
  Week starts from Monday and for values greater than 7 or less than 1, print Invalid.*

  ```
    class Solution {
        whichWeekDay(day) {
            switch (day) {
                case 1:
                    console.log("Monday");
                    break;
                case 2:
                    console.log("Tuesday");
                    break;
                case 3:
                    console.log("Wednesday");
                    break;
                case 4:
                    console.log("Thursday");
                    break;
                case 5:
                    console.log("Friday");
                    break;
                case 6:
                    console.log("Saturday");
                    break;
                case 7:
                    console.log("Sunday");
                    break;
                default:
                    console.log("Invalid");
                    break;
            }
        }
    }
  ```

- <h3>Array Basics</h3>

  *Given an integer array nums, return the sum of the 1st and last element of the array.*

  ```
    class Solution {
        sumOfFirstAndLast(nums) {
            return nums[0] + nums[nums.length - 1];
        }
    }
  ```

- <h3>Loops</h3>

  *Given two integers X and N, print the value X on the screen N times. Move to the next line after printing, even if N = 0.*

  Input: X = 7, N = 5
  Output: 7 7 7 7 7

  ```
    class Solution {
        printX(X, N) {
            let str = "";
            for(let i = 0; i < N; i++) {
                str += X + " ";
            }
            console.log(str);
        } 
    }
  ```

- <h3>String</h3>

  *Given a string s. Return the last character of the given string s.*

  Input : s = "takeuforward"
  Output : d

  ```
    class Solution {
        lastChar(s) {
            return s[s.length - 1];
        }
    }
  ```

- <h3>Patterns</h3>

        To Build Programming Logic.

- <h3>Time Complexity & Space Complexity</h3>

        To calculate the time and space taken and writer better code.

- <h3>C++ STL / Java Collections (Optional)</h3>

        To understand the language in-depth and use it better.

  ___

  <h3>Follow Each Problem in Repository. Happy Learning!</h3>

  ___