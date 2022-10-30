var a = [10,2,351,-42, -53];

for (const i of a){
    console.log(i);
    if (i%2==0) {
        console.log("Its Even " + i);
    }else{
        console.log("Its Odd " + i);
    }
}

for (let i = 0; i < a.length; i++){
    let element = a[i];
    console.log(element);
}
