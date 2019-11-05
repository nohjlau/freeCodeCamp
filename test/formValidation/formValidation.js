validateForm = () => {
    event.preventDefault()
    let fname = document.getElementById("fname").value
    let fnameInput = document.getElementById("fname")
    let fnameErrorMsg = document.getElementById('fname-error')
    let lname = document.getElementById('lname').value
    let lnameInput = document.getElementById('lname')
    let lnameErrorMsg = document.getElementById('lname-error')
    let email = document.getElementById('email').value
    let emailInput = document.getElementById('email')
    let emailErrorMsg = document.getElementById('email-error')
    let pass = document.getElementById('pass').value
    let passInput = document.getElementById('pass')
    let passErrorMsg = document.getElementById('pass-error')

    if (fname == "" || fname == null || fname.length == 0) {
        fnameErrorMsg.style.display = "flex";
        fnameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        fnameInput.style.border = "1px solid hsl(0, 0%, 0%)";
    }

    if (lname == "" || lname == null || lname.length == 0) {
        lnameErrorMsg.style.display = "flex"
        lnameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }  else {
        null
    }

    if (email == '' || email == null || email.length == 0) {
        emailErrorMsg.style.display = "flex"
        emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }   else {
        null
    }

    if (pass == '' || pass == null || pass.length == 0) {
        passErrorMsg.style.display = "flex"
        passInput.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        null
    }
}