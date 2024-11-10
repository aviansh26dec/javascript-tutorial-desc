class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`Hi ${this.userName}, You are logged in.`)
    }

    static currentSessionId(){
        return (Math.floor(Math.random() * 1000));
    }
}

const user = new User('Avinash Kumar Singh');

user.logMe();

// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
console.log(User.currentSessionId());
