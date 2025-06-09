const error = document.querySelector("#error")
const user = document.querySelector("#user")

//For email
const email = document.querySelector("#email");
email.addEventListener('keyup', () => {
    if (email.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Email required"
        return false;
    }
    else if(email.value.length < 6){
        error.style.display = "block"
        error.innerHTML = "Email must be a least 6 character"
        return false;
    }
    else if(!email.value.match(/^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/)){
        error.style.display = "block"
        error.innerHTML = "Email not valid"
        return false;
    }
    error.style.display = "none"
})

document.getElementById("passcheck").addEventListener("click", (e) => {
    let pass = document.getElementById("pass")
    let passcheck = document.getElementById("passcheck")
    if (pass.type == "password") {
        pass.type = 'text'
        passcheck.setAttribute("name", "eye-outline")
        pass.style.border = 'none'
        pass.style.outline = 'none'
        pass.style.marginBottom = "0px"
    }else{
        pass.type = "password"
        passcheck.setAttribute("name", "eye-off-outline")
    }
})