
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