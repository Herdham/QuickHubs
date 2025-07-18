const error = document.querySelector("#error")
const user = document.querySelector("#user")
user.addEventListener('keyup', () => {
    if (user.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "User required"
        return false
    }
    else if(!user.value.match(/^[A-Z][a-z]+[0-9]+$/)){
        error.style.display = 'block'
        error.innerHTML = 'Name must start with capital letter and only character and number required'
        return false;
    }
    error.style.display = "none"
})


const pass = document.querySelector("#pass")
pass.addEventListener('keyup', () => {
    if (pass.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Password required"
        return false
    }
    error.style.display = "none"
})

function validate(){
    if (user.value.length == 0) {
        error.style.display = "block"
        error.innerHTML = "Username required"
        return false;
    }
    else if(pass.value.length == 0){
        error.style.display = "block"
        error.innerHTML = "Password required"
        return false;
    }
    error.style.display = "none"
    return true;
}

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