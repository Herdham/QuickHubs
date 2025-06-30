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