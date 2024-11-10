// create promises
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('First Async executed');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('first promise executed');
});

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Second Async executed');
        resolve();
    }, 1000);
})
.then(function(){
    console.log('second promise executed');
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Three Async executed');
        resolve({ userName: 'Avinash Singh', userPassword: 'password'});
    }, 1000);
});

promiseThree.then(function(user){
    console.log('three promise executed' + user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Four Async executed');
        resolve({ userName: 'Avinash Singh', userPassword: 'password'});
    }, 1000);
});

promiseFour.then(function(user){
    return user.userName;
}).then(function(userName){
    console.log('three promise executed' + userName);
});

const promiseFive = new Promise(function(resolve, reject){
    const error = true;
    if(!error){
        console.log('Five Async executed');
        resolve({ userName: 'Avinash Singh', userPassword: 'password'});
    }else{
        reject('Error: Something went wrong');
    };
});

promiseFive.then(function(user){
    return user.userName;
}).then(function(userName){
    console.log('five promise executed ' + userName);
}).catch(function(error){
    console.log('five promise executed ' + error);
});


const promiseSix = new Promise(function(resolve, reject){
    const error = true;
    if(!error){
        console.log('Six Async executed');
        resolve({ userName: 'Avinash Singh', userPassword: 'password'});
    }else{
        reject('Error: Something went wrong with sex async');
    };
});

async function consumePromiseSix(){
    try {
        const response = await promiseSix;
        console.log(response)
    } catch (error) {
        console.log('consume six promise executed ' + error);
    }
}

consumePromiseSix();


async function getRandomUser(){
    try {
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        console.log(date);
    } catch (error) {
        console.log('E: '+error);  
    }
}

// getRandomUser();

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log('Error: '+e);
    
})






