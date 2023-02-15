///////////////////////////////////////////////
/////////////// Insertion Sort ///////////////
/////////////////////////////////////////////

const testInsertionSort = [1,3,2,4,7];

function insertionSort (array) {
  for(let i = 1; i < array.length; i++){
    let currentValue = array[i];
    
    for(var j = i-1; j >= 0 && array[j] > currentValue; j--){
      array[j+1] = array[j]
    }
    array[j+1] = currentValue;
  }
  return array
}

insertionSort([3,9,0,1,5,2])