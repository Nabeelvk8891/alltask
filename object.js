let person = {
    name: 'Bob',
    age: 24,
    job: 'driver'

}

let key = 'place';
person[key] = 'kollam';

delete person.age

console.log(person);


////////////////////////////////

let bill = {
    qtrMandi : 180,
    qtrAlFaham: 140,
    porotta_4: 12*4,
    pepsi: 45,
    tea: 10,
    shawarma:120


}

let total = 0;

for(let key in bill){
    if (typeof bill[key]==='number'){
        total += bill[key]
    }

}

console.log(total)
let mark = {
    sub: {
        sub1:'eng',
        sub2:'maths'
    },
    value: 50,
    
}