const prompt=require("prompt-sync")({signit:true});

function generateFibonacci(num) {
    
    let x = 0;
    let y = 1;

    if (num >= 1) {
        console.log(x);
      }
      if (num >= 2) {
        console.log(y);
      }
    
      for (let i = 3; i < num; i++) {
        const series = x + y;
        console.log(series);
        x = y;
        y = series;
      }
}


const times = parseInt(prompt("How many Numbers you want? : "));
const series = generateFibonacci(times);
console.log(series);

