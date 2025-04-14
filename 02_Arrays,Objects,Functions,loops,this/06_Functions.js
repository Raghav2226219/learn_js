// function name(){
//     console.log("R");
//     console.log("A");
//     console.log("G");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }

// name();

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(7,"3");

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(7,3);

// function add(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// const result = add(7,3);
// console.log(result);

// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(7,3);
// console.log(result);

function login(username){
    if(username === undefined){
        console.log("Enter your name");
        return;
    }
    return `${username} just logged in`
}

function login2(username = "Demo"){
    if(!username){
        console.log("Enter your name");
        return;
    }
    return `${username} just logged in`
}

function login3(username = "Demo"){
    if(username === undefined){
        console.log("Enter your name");
        return;
    }
    return `${username} just logged in`
}

const mess = login('Raghav')
console.log(mess); 

console.log(login2());