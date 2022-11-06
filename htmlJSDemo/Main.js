import { hello } from "./js/module1.js";
import { hello3, add, sub, evenorodd } from "./js/module2.js";

hello("Munim");
hello3("Munim3");

let result = add(10,20);
console.log(result);
let subresult = sub(30,20);
console.log(subresult);

let resultevenorodd = evenorodd(11);
console.log(resultevenorodd);

//all those assignments you should tranfrm to function using arrow