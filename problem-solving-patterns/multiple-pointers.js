
// Multiple Pointers;

//  Write a function that accepts 1 sorted array and reeturn the 2 
// elements which its sum is = 0.


function sortArr(arr) {
    return arr.sort((a, b) => a - b);
}


function sumZero(arr) {

    sortArr(arr);

    let left = 0;
    let right = arr.length - 1;
    let sum;

    while (left < right) {
        sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        }

        if (sum < 0) {
            left++;
        } else {
            right--;
        }
    } return false
}
sumZero([1, 2, 3, 4, 6, -5, 1, -1, 6, 5])





// count unique values
// Write a function that accepts one sorted array and 
// count the unique values in the array.
function countUniqueValues (arr){
    sortArr(arr);
    let i = 0;
    let counter = 1;
    
    if(arr.length === 0 ) return null;
    
    for(let j = 1; j < arr.length; j++){
      if(arr[i] != arr[j]){
        counter ++;
      }
      i++;
    }
  return counter
  }
  countUniqueValues([1,2,2,3,4,5,6,6,6,7,8,9,1,1,10,0,11])