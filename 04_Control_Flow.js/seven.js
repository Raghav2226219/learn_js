const nums = [1,2,3,4,5,6,7,8,9,10]

// const nn = nums.map((num) => num + 10);

const nn = nums.map((num) => num * 10).map((num) => num*10).filter((num) => num > 400);

console.log(nn);