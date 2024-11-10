const descriptorPi = Object.getOwnPropertyDescriptor(Math, 'PI');
Object.defineProperty(Math, 'PI', {
    writable: true
});

console.log(descriptorPi);

const user = {
    userName: 'Avinash Kumar Singh',
    userEmail: 'avinash@gmail.com',
    userLoggedIn: true
}


// If we can define property is false ther we are unable to iterate or writable.
Object.defineProperty(user, 'userName', {
    writable: false,
    enumerable: false
});

const descriptorName = Object.getOwnPropertyDescriptor(user, 'userName');
console.log(descriptorName);

user.userName = 'Siddharth Singh';

console.log(user);

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}