const marvel = ["Thor", "Iron Man", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

// marvel.push(dc);
// console.log(marvel);

// const arr = marvel.concat(dc);
// console.log(arr);

// const all = [...marvel,...dc];  // Spread operator
// console.log(all);

const ano = [1,2,3,4,5,[6,7,8],9,[10,11,[12]]];

const real = ano.flat(Infinity);
console.log(real);

console.log(Array.isArray("Raghav"));
console.log(Array.from("Raghav"));
console.log(Array.from({name: "Raghav"}));


let sco1 = 100;
let sco2 = 150;
let sco3 = 200;

console.log(Array.of(sco1,sco2,sco3));