const nums = [1, 2, 3, 4]
const nn = nums.reduce(function (acc,curr){
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc+curr
},0)
console.log(nn);
// const nn = nums.reduce((acc,curr) => acc+curr, 0);

// const nn = [
//     {
//         item: "course1",
//         price: 4999
//     },
//     {
//         item: "course2",
//         price: 3999
//     },
//     {
//         item: "course3",
//         price: 4769
//     },
//     {
//         item: "course4",
//         price: 4599
//     }
// ]

// const total = nn.reduce((acc,item) => acc + item.price,0)

// console.log(total);