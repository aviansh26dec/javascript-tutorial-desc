// creat new prototype
let userName = 'Avinash Kumar Singh    ';

String.prototype.countleng = function(){
    return this.trim().length;
}

console.log(userName.countleng());

// inheritance

const user = {
    userName: "Avinash",
    userEmail: "avinash@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSucpport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__ : TeachingSucpport
}

console.log(TASupport.__proto__)

user.__proto__ = Teacher;

console.log(user.__proto__)

Object.setPrototypeOf(Teacher, TeachingSucpport);

console.log(Teacher.__proto__)

