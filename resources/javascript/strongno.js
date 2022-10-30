// strong number
// 154: 1! + 5! + 4!
//      : 1 + 120 + 24
// 145
// if sum of the factorial = original number then that number is called as strong number

var number =145;
var digit = 0;
var factoral = 1;
var sum = 0;
while (number >0){
    digit = number % 10;
    console.log("number in while loop " + number);
    for (var i=1; i<=digit; i++){
        console.log("i in for loop " + i);
        console.log("digit in for loop " + digit);
        console.log("factoral in for loop " + factoral);
        factoral = factoral * i;

    }
    console.log(factoral);
    sum+=factoral;
    factoral = 1;       
    
    number = Math.floor(number/ 10);
}
console.log("Factoral of " + number + "is " + sum);