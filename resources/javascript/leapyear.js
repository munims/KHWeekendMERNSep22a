var year = 1700

if ((year%4 == 0 && year %100 !=0) || year % 400 ==0 ){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " Not a Leap Year")
}

// T : T F
