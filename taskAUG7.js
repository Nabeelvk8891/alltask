////////////////////Q1/////////////////

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(val of items){
    if(val % 3 ==0){
        continue;
    }

    console.log(val);
  
}








////////////Q2///////////////
console.log("Next question")

let arr = [2,3,4,7,9,2,7,3,8];

let unique = arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val))

console.log(unique);




