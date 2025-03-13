// const tinderuser = new Object();  // It is a singleton object

const tinderUser = {} //  It is a non singleton object

tinderUser.id = "2sd34x";
tinderUser.name = "Tony";
tinderUser.isLoggedIn = true;

console.log(tinderUser);
// console.log(tinderuser);

const user = {
    email: "abc@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Tony",
            lastname: "Stark"
        }
    }
}

// it is object inside an object

console.log(user.fullname.userFullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2};
console.log(obj3); // yaha object ka andar doobject baneha 

const obj4 = Object.assign({},obj1,obj2); // yaha {} isliye pass kiya ha taki jo object return hoye voh new ho agar yeah na de toh obj1 modify hoye ga 
console.log(obj4); //  yaha 2  objects merge hoye ha 

const obj5 = {...obj1, ...obj2};
console.log(obj5);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));