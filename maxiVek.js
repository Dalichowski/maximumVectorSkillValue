//JS test from skillValue//

/*Given 2 vectors of integer numbers, with m and n elements each, check if the maximum element from the first vector is found in the second one.

Input: m, arr1[m], n and arr2[n]
Output: Boolean value - 0 for FALSE or 1 for TRUE. The output should be printed with a new line character at the end (just as in the already given code).

Example:
For m = 5, arr1 = {1, 9, 4, 3, 7} and n = 7, arr2 = {1, 6, 9, 12, 26, 78, 94}, the maximum element from the first array is found on the 3rd position in the second array so the output is 1.*/

/*Input From SkillValue*/
// var input_string = readInputContent();
// var data = input_string.split('\n');

// var m = parseInt(data[0]);
// var arr1 = data[1].split(' ').map(function (item) { return parseInt(item); });
// var n = parseInt(data[2]);
// var arr2 = data[3].split(' ').map(function (item) { return parseInt(item); });

// var result = -1;
// YOUR CODE HERE

//HIGHEST IN ARR1
var arr1Highest = Math.max.apply(null, arr1);

//CHECKING ARR1HIGHEST IN ARR2 
var arr1InArr2 = arr2.find(element => element === arr1Highest);

//PRINT RESULT
function Highest(){
    if (arr1Highest === arr1InArr2){
        return 1;
    } else {
        return 0;
    }
}


printOutput(Highest());



