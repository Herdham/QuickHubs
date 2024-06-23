let check = document.querySelector(".check #checkpass");
let pass = document.querySelector("#pass");
check.addEventListener('click', () => {
    if (check.checked == true) {
        pass.type = "text"
    }else{
        pass.type = "password"
    }
})

//For first name
const error = document.querySelector("#error");
const first = document.querySelector("#first");
first.addEventListener('keyup', () => {
    if (first.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "First name require"
        return false;
    }
    else if(first.value.length < 4){
        error.style.display = "block"
        error.innerHTML = "First must be at least 4 character"
        return false;
    }
    else if(!first.value.match(/^[A-Z][a-z]+$/)){
        error.style.display = "block"
        error.innerHTML = "Name must start with capital letter and only character required"
        return false;
    }
    error.style.display = "none"
})


//For last name

const last = document.querySelector("#last");
last.addEventListener('keyup', () => {
    if (last.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Last name require"
        return false;
    }
    else if(last.value.length < 4){
        error.style.display = "block"
        error.innerHTML = "Last must be at least 4 character"
        return false;
    }
    else if(!last.value.match(/^[A-Z][a-z]+$/)){
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
    if(first.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "First name required"
        return false;
    }
    else if(last.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Last name required"
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