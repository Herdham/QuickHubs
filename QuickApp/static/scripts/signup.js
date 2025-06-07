//For Username
const user = document.querySelector("#user");
let error = document.querySelector("#error")
user.addEventListener('keyup', () => {
    if (user.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "User name required"
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

//For password
const password = document.querySelector("#pass");
password.addEventListener('keyup', () => {
    if (password.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Password required"
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

let cpass = document.querySelector("#cpass");
cpass.addEventListener('keyup', (e) => {
    if(cpass.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Comfirm Password required"
        return false;
    }else if(cpass.value.length < 6){
        error.style.display = "block"
        error.innerHTML = "Comfirm Password must be at least 6 character"
        return false;
    }else{
        error.style.display = "none"
    }
})

document.getElementById("passcheck").addEventListener('click', (e) =>{
    let pass = document.querySelector("#pass")
    let passcheck = document.getElementById("passcheck")
    if (pass.type == "password") {
        pass.type = "text"
        passcheck.setAttribute("name", "eye-outline")
        pass.style.border = 'none'
        pass.style.outline = 'none'
        pass.style.marginBottom = "0px"
    }else{
        pass.type = "password"
        passcheck.setAttribute("name", "eye-off-outline")
    }
})

document.getElementById("cpasscheck").addEventListener('click', (e) =>{
    let cpass = document.querySelector("#cpass")
    let cpasscheck = document.getElementById("cpasscheck")
    if (cpass.type == "password") {
        cpass.type = "text"
        cpasscheck.setAttribute("name", "eye-outline")
        cpass.style.border = 'none'
        cpass.style.outline = 'none'
        cpass.style.marginBottom = "0px"
    }else{
        cpass.type = "password"
        cpasscheck.setAttribute("name", "eye-off-outline")
    }
})