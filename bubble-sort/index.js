
////////////////////////////////////////////
/////////////// Bubble Sort ///////////////
//////////////////////////////////////////


// function bubbleSort (array) {
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//       if(array[j] > array[j+1]){
//         let temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
//   return array
// }
//bubbleSort(myarray)


// Refactored 

function bubbleSort (array) {
  let noSwaps;
  for(let i = array.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i-1; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps){
      break;
    }
  }
  console.table(array)
  return array
}

bubbleSort([1,3,5,6,0,2,20])
