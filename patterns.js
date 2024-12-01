console.log("------------square--------------");

let s = 5;
for (row = 1; row <= s; row++) {
  const arr = [];
  for (col = 1; col <= s; col++) {
    arr.push("*");
  }
  console.log(arr.join(" "));
}

console.log("------------inverse right angle triangle--------------");
let t = 5;
for (row = 1; row <= t; row++) {
  let arr = [];
  for (col = 1; col <= t; col++) {
    if (col + row <= t + 1) {
      arr.push("*");
    } else {
      arr.push(" ");
    }
  }
  console.log(arr.join(" "));
}

console.log("------------inverse pyramid--------------");

let p = 5;
let pyramid = "";

for (let i = 0; i < p; i++) {
  for (let j = 0; j < i; j++) {
    pyramid += " ";
  }

  for (let k = 0; k < 2 * (p - i) - 1; k++) {
    pyramid += "*";
  }
  pyramid += "\n";
}
console.log(pyramid);

console.log("------------ hollow square using star--------------");

let h =5;
let hollow = "";

for (r=0; r < p; r++) {
    for (c = 0; c < h; c++) {
      if(r==0 || r==h-1){
hollow +="*"
      }
      else{
        if(c==0 || c==h-1){
            hollow +="*"  
        }
        else{
            hollow +=" "
        }
      }
    }
    hollow +="\n"
}console.log(hollow)