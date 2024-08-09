let newDate = new Date();

let month = newDate.getMonth();
let year = newDate.getFullYear();
let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
let lastDayPrev = new Date(newDate.getFullYear(), newDate.getMonth() - 1, 0).getDate();

let firstDay = newDate.getDay() - 1;
let endday = new Date(newDate.getFullYear(), newDate.getMonth(), lastDay).getDay() ;

let daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let calendar = [];

let lastDayPrevMonthStart = lastDayPrev - firstDay;
let nextMonthDay = 0;

for(let i = (1 - firstDay); i <= (lastDay + (7 - endday)); i++ ){
    if(i < 1){
        lastDayPrevMonthStart = lastDayPrevMonthStart + 1;
        calendar.push(lastDayPrevMonthStart)
    }else{
        if(i <= lastDay){
            calendar.push(i)
        }else{
            nextMonthDay = nextMonthDay + 1;
            calendar.push(nextMonthDay)
        }
    }
}

console.log(calendar);