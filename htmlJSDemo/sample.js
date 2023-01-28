
function onSubmit()  {
    //alert("Please enter");

    let x = document.forms["signup"]['name'].value ;
    //console.log("Hello from Munim on submit...");
    if (x == "") {
        alert("Name must be filled out");
    return false;
}
