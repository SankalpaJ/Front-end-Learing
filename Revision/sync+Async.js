//1. open Book my show - 3sec
//2. search movies - 2 sec
//3. select seats - 5 sec
//4. Tickect Booked - 1 sec

//Sync
// console.log("1. open Book my show");
// console.log("2. search movies");
// console.log("3. select seats");
// console.log("4. Tickect Booked");

// Aysc 

// setTimeout(()=> {
// console.log("1. Open Book my Show");
// },3000);
// setTimeout(()=>{
//     console.log("2. search movies");
// },5000);
// setTimeout(()=>{
//    console.log("3. select seats"); 
// },10000);
// setTimeout(()=>{
//    console.log("4. Tickect Booked");
// },1000);

//call-backs

// function order(call_prepare){
//     console.log("Ordered food"); 
//     call_prepare(); 
// }
// function prepare() {
//     console.log("preperation started");
// }

// order(prepare);


//Aysc - call backs -> Syncronous
// setTimeout(()=> {
//     console.log("Step 1 - Open BMS");
//     setTimeout(()=>{
//       console.log("Step - 2 - search movies"); 
//       setTimeout(()=> {
//         console.log("step 3 - select seats");
//         setTimeout(()=>{
//             console.log("step 4 = Ticket Booked")
//         },1000);
//       },5000);
//     },3000);
// },2000);

//Promises

// p = new Promise((resolve, reject) => {
//     app = "BMS";
//     if(movie === "BMS")
//         resolve("Open book my show");
//     else
//         reject("BMS not found");
// })
// p.then((app)=>{
//     console.log(`found:  ${app}`);
// })
// .then(()=>{
//     console.log(`search for movie`);
// })
// .then(() => {
//     console.log(`Tickect Booked`);
// })
// .catch((err) => {
//     console.log(err.message);
// })
// .finally(() =>{
//     console.log("closed phone")
// }
// );

//promises with settimeout

p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let app = "BS";
    if (app === "BMS") {
      resolve("Open BookMyShow");
    } else {
      reject(new Error("BMS not found"));
    }
  }, 2000);
});

p.then((app) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Opened ${app}`);
      resolve();
    }, 2000);
  });
})
.then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Search for a movie");
      resolve();
    }, 4000);
  });
})
.then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ticket Booked");
      resolve();
    }, 1000);
  });
})
.catch((err) => {
  console.log(" Error:", err.message);
})
.finally(() => {
  setTimeout(() => {
    console.log(" Closed phone");
  }, 6000);
});


//Async + Await

// async function main() {
//   console.log("Start process..."); 

//   // Step 1: Open app 

//   await new Promise((resolve) => setTimeout(resolve, 2000)); 
//   console.log("Step 1: Opened app"); 

//   // Step 2: Searching for a movie 

//   await new Promise((resolve) => setTimeout(resolve, 2000)); 
//   console.log("Step 2: Searching for a movie"); 

//   // Step 3: Ticket booked 

//   await new Promise((resolve) => setTimeout(resolve, 2000)); 
//   console.log("Step 3: Ticket Booked"); 
  
//   console.log("Process complete!"); 

// } 

// main(); 

//optimized way

// function wait(ms){
//   return new Promise((resolve)=> setTimeout(resolve, ms)) 
// }
// async function Bookticket(){
//   try{
//     const app = "BMS";
//     await wait(2000);
//     if(app === "BMS") {
//     console.log("Open Book my show - 2 sec");
//     }else{
//       throw new Error("BMS not found"); 
//     }

//     await wait(4000);
//     console.log("Serach for movie - 4 sec");

//     await wait(3000);
//     console.log("Teckect Booked - 3sec");

//     console.log("Close Phone");
//   }
//   catch(er){
//     console.log(er.message);
//   }
//   finally {
//     console.log("Close phone");
//   }
// }

// Bookticket();