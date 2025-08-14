// let cache = []
// function add(a,b){
//     let num = `${a},${b}`;

//     if(num in cache){
        
//         console.log('from cache',cache[num])
//         return cache[num]
//     }
//     let result = a+b;
//     cache[num] = result;
//     console.log("calculated",result);
    
//     return cache[num]
// }

// add(5,6);
// add(5,6);

// let cachee ={}
// function mul(n){
//     let number = n;
//     if(number in cachee){
//         console.log('from cache',cachee[number]);
        
//         return cachee[number]
//     }
//     let result = n*n
//     cachee[number] = result
//     console.log('normal',cachee[number]);
    
//     return result
// }

// mul(5)
// mul(5)
// mul(5)
// mul(5)
// mul(5)

let cache = {};
function mul(n){
    if(cache[n]){
        console.log(cache[n]);
        
        return cache[n]
    }

    let result = n*n;
    cache = result
    console.log(result)
}
mul(2)