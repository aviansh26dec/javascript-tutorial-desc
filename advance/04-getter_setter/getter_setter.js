class User{
    constructor(userName){
        this.userName = userName; 
    }

    get userName(){
        return this._userName;
    }
    set userName(userName){
        this._userName = userName.toUpperCase();
    }
}

const name = new User('avinash');
console.log(name.userName);