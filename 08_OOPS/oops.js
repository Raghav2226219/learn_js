const user = {
    username: "Raghav",
    login: 8,
    signIn: true,

    getDetails: () => {
        console.log("Got details.")
    }
}

// console.log(user);
// console.log(user.getDetails())


function User(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
        
    }

    return this; // it is not compulsory to write as function will implisitly return it
} 

const userOne = new User("Raghav", 5, true);
const userTwo = new User("Kaushal", 9, false);

console.log(userOne.constructor);
console.log(userTwo);

