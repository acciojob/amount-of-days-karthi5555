function daysOfAYear(year){
    let isLeap = false;
    if(year % 4 ===0 ){
        //may be a leap year
        if(year % 100 === 0){
            //century year
            return year % 400 === 0 ? 366 : 365;
        }
        return 366
    }
    return 365
}
let year = prompt("enter the year")
let days = daysOfAYear(year);
alert(days)