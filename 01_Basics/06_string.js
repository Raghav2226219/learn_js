const name = "Raghav ";
const repo = 13;

// console.log(name + repo);  // old fashion

// console.log(`Name is ${name} and number of repos are ${repo}`);

const game = new String('Clash of Clans');

// console.log(game);

// console.log(game[0]);
// console.log(game.__proto__);
// console.log(game.length);

// console.log(game.toUpperCase());
// console.log(game.charAt(4));
// console.log(game.indexOf('C'));

const newS = game.substring(0,2);
// console.log(newS);

const newS2 = game.slice(0,4);
// console.log(newS2);


const newS3 = game.slice(-11,7);
// console.log(newS3);

const n = "  royal   "
console.log(n);
console.log(n.trim());
console.log(n.replaceAll(" ", "*"));
console.log(n.includes("oy"));