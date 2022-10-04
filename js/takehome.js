/*Take-Home Challenge
Write a function that accepts a password (string)
Validate the password using the following rules:
Must be 6-20 characters long
Must start with a letter
alert the user if their password has been accepted or why their password was rejected*/

function pWord() {
    let a = document.getElementById("pW");
    let b = document.getElementById("hide1");
    let c = document.getElementById("hide2");

    if (a.type === "password") {
        a.type = "text";
        b.style.display = "block";
        c.style.display = "none";
    }
     else {
        a.type = "password";
        b.style.display = "none";
        c.style.sisplay = "block";
    }
};

function submit() {
    let pw = document.getElementById('pW');

    if (pw.value.length < 6 || pw.value.length > 20 || pw.value =='') {
        alert('Password Must be between 6 & 20 characters in length')
    } 
    else if (pw.value.charAt(0) >= 0 && pw.value.charAt(0) <= 9) {
        alert('Password MUST begin with a letter')
    } 
    else {
        const submitClear = document.getElementById("submitPw");
        alert('Password is accepted');
        submitClear.addEventListener("click", function clearField(){
            pw.value = ""
    })}
};
       