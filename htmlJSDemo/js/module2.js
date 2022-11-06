export function hello3(msg) {
    console.log(msg);
}

export let add = (num1, num2) => num1 + num2;
export let sub = (num1, num2) => num1 - num2;

export let evenorodd = (num1) => {
    if (typeof num1 == 'number'){

    
        if (num1 % 2 === 0 ) {
        return "even";
    }else{
        return "odd";
    }

}
return "not a number";
};
