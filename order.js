
//a use forEach()
const orders = [200, 450, 130, 50, 1000, 20];
   orders.forEach(n => console.log(n))


//b use filter()

const ordersAbove100 = [200, 450, 130, 50, 1000, 20];
console.log (ordersAbove100.filter(n => n>100))

//c use map()

const ordersDiscounted = [200, 450, 130, 50, 1000, 20];
console.log (ordersDiscounted.map(item => item-10))


//c use reduce()

let total = ordersDiscounted.reduce((acc,item)=>{
    return acc+item
},0)
console.log(total);





