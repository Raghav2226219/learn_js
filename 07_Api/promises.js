const promise1 = new  Promise(function(resolve, reject){
    //do an async task
    // e.g, DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Raghav", email: "abc@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = false;
        if(!err){
            resolve({username: "Raghav", password: "123"});
        }else{
            reject("ERROR!!!!!!!!!")
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log("Done"))

const promise5 = new Promise(function(resolve,reject){
     setTimeout(function(){
        let err = true;
        if(!err){
            resolve({username: "JavaScript", password: "123"});
        }else{
            reject("JS ERROR!!!!!!!!!")
        }
    }, 1000)
});

async function consumePro(){
    try{
        const respo = await promise5
    console.log(respo);
    } catch(error){
        console.log(error);
    }
}

consumePro();