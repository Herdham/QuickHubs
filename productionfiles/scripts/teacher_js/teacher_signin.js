const check = document.querySelector(".checks #checkButton")
const pass = document.querySelector("form #pass")

const checks = () => {
    if (check.checked == true) {
        pass.type = 'text'
    }else{
        pass.type = 'password'
    }
}

check.addEventListener('click', checks);

const error = document.getElementById("error");
const username = document.querySelector("#user");
username.addEventListener('keyup', () => {
    if (username.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Username is required"
        return false
    }
    error.style.display = 'none'
})

const password = document.querySelector("#pass");
password.addEventListener('keyup', () => {
    if (password.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Password required"
        return false
    }
    error.style.display = 'none'
})

function validate(){
    if(username.value.length == 0){
        error.style.display = 'block'
        error.innerHTML = 'Username required'
        return false
    }
    else if(password.value.length == 0){
        error.style.display = 'block'
        error.innerHTML = 'Password required'
        return false
    }
    error.style.display = 'none'
    return true
}