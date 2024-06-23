jQuery(() => {
    let check = document.querySelector(".checks #checkButton");
    let pass = document.querySelector("#pass");
    let cpass = document.querySelector("#cpass");
    check.addEventListener('click', () => {
        if (check.checked == true) {
            pass.type = "text"
        }else{
            pass.type = "password"
        }
    })
    check.addEventListener('click', () => {
        if (check.checked == true) {
            cpass.type = "text"
        }else{
            cpass.type = "password"
        }
    })
})

const error = document.getElementById("error");
const fullname = document.querySelector("#name");
fullname.addEventListener('keyup', () => {
    if (fullname.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Name is required"
        return false
    }
    else if(!fullname.value.match(/^[A-z][a-z]+\s{1}[A-Z][a-z]+$/)){
        error.style.display = 'block'
        error.innerHTML = "Name must start with capital letter with space in between"
        return false;
    }
    error.style.display = 'none'
})

const username = document.querySelector("#user");
username.addEventListener('keyup', () => {
    if (username.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Username is required"
        return false
    } else if(!username.value.match(/^[A-Z][a-z]+[0-9]+$/)){
        error.style.display = "block"
        error.innerHTML = "Username must start with capital letter with at least 2 digit number"
        return false
    }
    error.style.display = 'none'
})

const phone_no = document.querySelector("#phone_no");
phone_no.addEventListener('keyup', () => {
    if (phone_no.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Phone_No is required"
        return false;
    }
    error.style.display = 'none'
})

const email = document.querySelector("#email");
email.addEventListener('keyup', () => {
    if (email.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Email Address is required"
        return false
    }else if(!email.value.match(/^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/)){
        error.style.display = 'block'
        error.innerHTML = 'Email not valid'
        return false;
    }
    error.style.display = 'none'
})

const pass = document.querySelector("#pass");
const cpass = document.querySelector("#cpass");

pass.addEventListener('keyup', () => {
    if (pass.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Password is required"
        return false
    }
    error.style.display = 'none'
})

cpass.addEventListener('keyup', () => {
    if (cpass.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Comfirm password is required"
        return false
    }
    error.style.display = 'none'
})

function validate(){
    if (pass.value != cpass.value) {
        error.style.display = "block"
        error.innerHTML = "Password must be equal"
        return false
    }
    
    else if(fullname.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Name is required"
        return false;
    }
    else if(!fullname.value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)){
        error.style.display = "block"
        error.innerHTML = "Name must start with capital letter with space in between"
        return false
    }
    else if(username.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Username is required"
        return false;
    }
    else if(!username.value.match(/^[A-Z][a-z]+[0-9]+$/)){
        error.style.display = "block"
        error.innerHTML = "Username must start with capital letter with at least 2 digit number"
        return false
    }
    else if(email.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Email required"
        return false;
    }
    else if(!email.value.match(/^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/)){
        error.style.display = 'block'
        error.innerHTML = 'Email not valid'
        return false;
    }
    else if(phone_no.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Phone_No is required"
        return false;
    }
    else if(pass.value.length == 0){
        error.style.display = 'block'
        error.innerHTML = 'Password required'
        return false
    }
    else if(cpass.value.length == 0){
        error.style.display = 'block'
        error.innerHTML = 'Password required'
        return false
    }
    error.style.display = "none"
    return true
}