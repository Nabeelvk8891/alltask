// let mypromise = new Promise((resolve,reject)=> {
//     let success = false;
//     if (success){
//         resolve("operation succesful")
//     }else{
//         reject("operation failed")
//     }
// });

// mypromise
// .then(result => console.log(result))
// .catch(err => console.log(err))
// .finally(console.log("this is fn"))

// let myPromise = new Promise((resolve,reject)=> {
//     let success = false;
//     if (success){
//         resolve("operation succesful")
//     }else{
//         reject("operation failed")
//     }
// });

// async function run() {
  
//   try{
//     await myPromise;
//     console.log("promise fulfilled");
    
    
//   }
//   catch(e){
    
//     console.log("promise unfulfilled");
//   }
// }

// run()


function step1(){
  let promise1 = new Promise((resolve,reject)=>{
    console.log("operation started")
    setTimeout(()=>{
      resolve()
      console.log('done');
    },3000)
  })
}



async function run(){
  try{
    await step1();
    console.log('operation success');
    
  }catch(e){
    console.error(e);
    

  }
}

run()