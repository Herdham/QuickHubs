let first_person = document.querySelector("#first_person");
let student_categories = document.querySelector(".students_categories");
first_person.addEventListener('click', () => {
    if (student_categories.classList.contains("dashboardopen")) {
        student_categories.classList.remove("dashboardopen");
    }else{
        student_categories.classList.add("dashboardopen");
    }
})

let menu = document.querySelector("#menu");
let closeBtn = document.querySelector("#closeBtn");
let otherside = document.querySelector(".otherside");
menu.addEventListener("click", () => {
    if (!otherside.classList.contains("othersideopen")) {
        otherside.classList.add("othersideopen")
    }
})

closeBtn.addEventListener('click', () => {
    if (otherside.classList.contains("othersideopen")) {
        otherside.classList.remove("othersideopen")
    }
})