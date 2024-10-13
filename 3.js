//---   Write code to read contents of a file and print it to the console.  ----//

const fs = require("fs");

fs.readFile("3.txt", "utf-8", (err, data)=>{
if(err) throw err;
console.log(data);
});

// -----expensive operation---------//
function expensiveoperation(){
    let sum = 0;
    for(let i=0; i < 1e8; i++){
        sum += i
    }
    console.log('Expensive operation done');
};

expensiveoperation();

