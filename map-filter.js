 const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){ map sorto puron kore arrayr moddhe element gula k dibe
//     return element * element;
// })

//const result = numbers.map(x => x * x);

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find (x => x > 5); 
// / find sorto puroner jonno porer ekta element k dekhabe...sobghula na
console.log(isThere);