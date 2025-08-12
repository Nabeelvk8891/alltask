////////////////Q1/////////////////////
const products = [
    {name: "A", price: 200},
    {name: "B", price: 100},
    {name: "C", price: 150},
    {name: "D", price: 200},
]

console.log(products.sort((a,b)=>a.price - b.price ));

const total = products.reduce((acc,product)=> acc+product.price,0)

console.log(total)


///////////////////Q2//////////////////

const items = [2,5,7,8,9,0,3];

console.log(Math.max(...items));





