let userDetail = {
    userName: "Avinash",
    webName: "Google LLC",
    webUrl: "https://google.com",
    welcomeMessage: function(){
        console.log(`Hi ${this.userName}, welcome to our website ${this.webName}`);
    }
}

userDetail.welcomeMessage();

function thisFunc(){
    console.log(this)
}

thisFunc();

// Inexplicit function
let sumOne = (num1, num2) => {
    return num1 + num2;
}

console.log(sumOne(45,64));

// Explicit function
let sumTwo = (num1, num2) =>  (num1 + num2);

console.log(sumOne(45,65));

// Explicit function
let returnObject = (userName) =>  ({ username: userName });
console.log(returnObject("Avinash Kumar Singh"));
