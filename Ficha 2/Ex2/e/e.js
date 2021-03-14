let whoIsIt = prompt("Who's There?");
if (whoIsIt == "Admin") {
    let passWord = prompt("Password?")
    if (passWord == "TheMaster") {
        alert("Welcome!")
    }
    else if (passWord == null || passWord == "") {
        alert("Canceled")
    }
    else{
        alert("Wrong Password!")
    }
}
else if (whoIsIt == null || whoIsIt =="") {
    alert("Canceled.")
}
else{
    alert("I don't know you.")
}

