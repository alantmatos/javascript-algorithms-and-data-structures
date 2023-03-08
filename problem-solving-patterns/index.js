
function frequencyCounter(string){
    let frequency = {};
    let currentLetter;
    
    for(let i = 0; i < string.length; i++){
      currentLetter = string[i];
      frequency[currentLetter] ? frequency[currentLetter] += 1 : frequency[currentLetter] = 1;
    }
    
    return frequency;
  }
  
  frequencyCounter("doggy");