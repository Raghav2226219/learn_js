const arr = [0,1,2,3,4,5];
console.log(arr);

const hero = ["Iron Man","Capt","Hulk"]
console.log(hero);

hero.push("Falcon");
console.log(hero);

hero.unshift("Spidy");
console.log(hero);

hero.shift();
console.log(hero);

hero.shift();
console.log(hero);

console.log(hero.indexOf("Hulk"));

console.log(arr);

const arr2 = arr.slice(1,3);
console.log(arr2);
console.log("B ",arr2);

const arr3 = arr.splice(1,3);
console.log(arr3);

console.log(arr);
