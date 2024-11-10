class User{
    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    encryptPassowrd(){
        console.log(`encrypted password is ${this.userPassword}abc`);
    }
}

const user = new User('avinash26dec', 'test@gmail.com', '123test');
user.encryptPassowrd();

// above process we can also do without class

// function User(userName, userEmail, userPassword){
//     this.userName = userName;
//     this.userEmail = userEmail;
//     this.userPassword = userPassword;
// }

// User.prototype.encryptPassowrd = function(){
//     console.log(`encrypted password is ${this.userPassword}abc`);
// }

// const user = new User('avinash26dec', 'test@gmail.com', '123test');
// user.encryptPassowrd();