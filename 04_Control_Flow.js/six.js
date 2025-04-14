const nums = [0,1,2,3,4,5,6,7,8,9];

const res = nums.filter((num)=> num > 5 );
console.log(res);

const nn = []

nums.forEach((num)=> {
    if(num>4){
        nn.push(num)
    }
})

console.log(nn);