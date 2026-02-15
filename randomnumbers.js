let randomNumbers = [];   
let i = 0;                
while (i < 10) {
    let randomNum = Math.floor(Math.random() * 100); 
   
    randomNumbers.push(randomNum);
    i++;
}

console.log(randomNumbers);
