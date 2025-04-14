//global scope

let a = 10;
// const b = 20;
var c = 30;

if (true) {
    // local scope
    let a = 40;
    const b = 50;
    var c = 60;
}

console.log(a);