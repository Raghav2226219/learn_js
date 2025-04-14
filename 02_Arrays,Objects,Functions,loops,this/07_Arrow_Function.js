const user = {
    username : "Raghav",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
    // "this" refers to current context
}

// user.welcomeMessage();

// user.username = "Kaushal";

// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai();

// const chai = function (){
//     let user = "Raghav";
//     console.log(this.user);
// }

// chai();

const chai = () => {
    let user = "Raghav";
    console.log(this);
}

// chai();

// syntax of arrow function

// () => {}

// const addtwo = (num1,num2) => {
//     return num1+num2;
// }

// console.log(addtwo(2,30))

// const addtwo = (num1,num2) => num1+num2;

// const addtw = (num1,num2) => (num1+num2);

const addtwo = (num1, num2) => ({user: "Raghav"})
// two return object in similar way ^ we have to put the object in () and it will look like ({object})
console.log(addtwo(2,30))
