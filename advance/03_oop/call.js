function setUserName(userName){
    this.userName = userName;
}

function setUserDetail(userName, userEmail, userContact){
    setUserName.call(this, userName);

    this.userEmail = userEmail;
    this.userContact = userContact;
}

const userDetail = new setUserDetail('avinash26dec', 'avinash@gmail.com', '1234567890')

console.log(userDetail);
