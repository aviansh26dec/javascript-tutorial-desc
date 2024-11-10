class User{

    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    logMe(){
        console.log('You logged in');
    }

}

class Teacher extends User{
    constructor(userName, userSubject){
        super(userName);
        this.userSubject = userSubject;
    }

    subjectTeacher(){
        console.log(`${this.userName} you are the teacher of subject ${this.userSubject}`)
    }
}

const english = new Teacher('avinash26dec','English');

english.logMe();
english.subjectTeacher();