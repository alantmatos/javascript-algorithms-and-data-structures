
//////////////////////////////////////////////
/////////////// Selectin Sort ///////////////
////////////////////////////////////////////


// const mytestarray = [1,2,3,6,5]

// function selectionSort (array) {
  
//   for(let i = 0; i < array.length; i++){
//     let smallest = i;
//     for( let j = i + 1; j < array.length; j++){
//       if(array[j] < array[i]){
//         smallest = j;
//       }
//     }
//     if(i !== smallest){
      
//     let temp = array[i];
//     array[i] = array[smallest];
//     array[smallest] = temp;
      
//     }

//   } return array
// }
// selectionSort(mytestarray)



// Refactored:

const swapArr = (arr, idx1, idx2) => {
return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]};

function selectionSort(array){
  for( let i = 0; i < array.length; i++){
    let lowestValue = i;
    for (let j = i +1; j < array.length; j ++){
      if(array[lowestValue] > array[j]){
        lowestValue = j;
      }        
    } if( i !== lowestValue){
      swapArr(array, i, lowestValue)
    }
  } return array
}

selectionSort([1,10,0,4,2,3,7,8,5])