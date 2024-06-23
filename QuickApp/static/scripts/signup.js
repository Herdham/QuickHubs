let check = document.querySelector(".check #checkpass");
let pass = document.querySelector("#pass");
check.addEventListener('click', () => {
    if (check.checked == true) {
        pass.type = "text"
    }else{
        pass.type = "password"
    }
})


//For last name
const fullname = document.querySelector("#last");
fullname.addEventListener('keyup', () => {
    if (fullname.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Name require"
        return false;
    }
    else if(fullname.value.length < 4){
        error.style.display = "block"
        error.innerHTML = "Name must be at least 4 character"
        return false;
    }
    else if(!fullname.value.match(/^[A-z][a-z]+\s{1}[A-Z][a-z]*$/)){
        error.style.display = "block"
        error.innerHTML = "Name must start with capital letter and only character required"
        return false;
    }
    
    error.style.display = "none"
})

//For Username
const user = document.querySelector("#user");
user.addEventListener('keyup', () => {
    if (user.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "User name require"
        return false;
    }
    else if(user.value.length < 6){
        error.style.display = "block"
        error.innerHTML = "User must be at least 6 character"
        return false;
    }
    else if(!user.value.match(/^[A-Z][a-z]+[0-9]+$/)){
        error.style.display = "block"
        error.innerHTML = "Name must start with capital letter and only character and number required"
        return false;
    }
    
    error.style.display = "none"
})

//For email
const email = document.querySelector("#email");
email.addEventListener('keyup', () => {
    if (email.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Email require"
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

//For password
const password = document.querySelector("#pass");
password.addEventListener('keyup', () => {
    if (password.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Password require"
        return false;
    }
    else if(password.value.length < 6){
        error.style.display = "block"
        error.innerHTML = "Password must be a least 6 character"
        return false;
    }
    error.style.display = "none"
})

function validate(){
    if(fullname.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Name required"
        return false;
    }
    else if(!fullname.value.match(/^[A-z][a-z]+\s{1}[A-Z][a-z]*$/)){
        error.style.display = "block"
        error.innerHTML = "Name must equivalent to this e.g (John Smith)"
        return false;
    }
    else if(user.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "User name required"
        return false;
    }
    else if(email.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Email required"
        return false;
    }
    else if(password.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Password required"
        return false;
    }
}