
let mark = [{'a': 1 , b: 2 },{'c': 3,'d': 4 }, {'d' : 5 ,'f' : 6 }]

//  a)  //

const [A,...REST] = mark
console.log(A,REST)

// b) //
const [,{c,d},] = mark
console.log(c);
console.log(d);




