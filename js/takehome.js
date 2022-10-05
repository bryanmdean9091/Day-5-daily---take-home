/*Take-Home Challenge
Write a function that accepts a password (string)
Validate the password using the following rules:
Must be 6-20 characters long
Must start with a letter
alert the user if their password has been accepted or why their password was rejected*/

const showBtn = document.getElementById('show');
showBtn.addEventListener("click", eyeToggle)

function eyeToggle() {
    passwordInput = document.getElementById('pW');
    const input = document.getElementById('icon');
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.innerText = "visibility_off"
    } else {
        passwordInput.type = "password"
        icon.innerText = "visibility"
    }
};

function submit() {
    let pw = document.getElementById('pW');
    if (pw.value.length < 6 || pw.value.length > 20 || pw.value == '') {
        alert('Password Must be between 6 & 20 characters in length');
        pw.value = "";

    } else if (pw.value.charAt(0).match(/[a-zA-Z]/) == null) {
        alert('Password MUST begn with a letter')
        pw.value = "";
    } else {
        alert('Password is accepted');
        pw.value = "";
        console.log(pw.value)
    }
};
