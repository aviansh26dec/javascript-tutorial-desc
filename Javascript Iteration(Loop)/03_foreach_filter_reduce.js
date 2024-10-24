let myNum = [1,2,3,4,5,6,7,8,9,10];

myNum.forEach((value) => {
    // console.log(value);
});

let newMyNum = myNum.map((value) => {
    return value * 10;
});

let filterNum = newMyNum.filter((value) => (value > 30 && value < 90));

let initialValue = 0;
let calNum = newMyNum.reduce((preValue, currValue) => { return preValue + currValue }, initialValue)

console.log(calNum);
