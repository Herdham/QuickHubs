jQuery(function () {
    // ELEMENT ONE
    const awrap1 = document.createElement('a')
    awrap1.setAttribute('href', '#')
    const moreele = document.createElement('div')
    moreele.className = 'newelement'
    const heading = document.createElement('h4')
    heading.innerHTML = "I'm looking to hire"
    const paragraph = document.createElement('p')
    paragraph.innerText = "I'd like to learn from Pro Teachers and agencies while using free learning tools"
    $(moreele).append(heading, paragraph)
    const moreabout = document.querySelector('.moreabout').children;
    const moreconvert = Array.from(moreabout)
    $(awrap1).append(moreele)

    // ELEMENT TW0
    const morele2 = document.createElement('div')
    morele2.className = 'newelement2'
    const div1 = document.createElement('div')
    div1.className = 'eleinner'
    const div2 = document.createElement('div')
    div2.setAttribute('href', '#')
    div2.className = 'eleinner'
    const div3 = document.createElement('div')
    div3.className = 'eleinner'
    const heading1 = document.createElement('h4')
    heading1.innerText = "Learn"
    const paragraph1 = document.createElement('p')
    paragraph1.innerText = "Professional online courses, led by experts"
    const heading2 = document.createElement('h4')
    heading2.innerText = "Discover"
    const paragraph2 = document.createElement('p')
    paragraph2.innerText = "Inspiring Subject & Topics made on QuickHub"
    const heading3 = document.createElement('h4')
    heading3.innerText = "Blog"
    const paragraph3 = document.createElement('p')
    paragraph3.innerText = "News, Information and community stories"
    div1.append(heading1, paragraph1)
    div2.append(heading2, paragraph2)
    div3.append(heading3, paragraph3)
    morele2.append(div1, div2, div3)


    moreconvert.filter((item, index) => {
        if (index == 0) {
            $(item).before(awrap1)
            // console.log(list)
            item.addEventListener('click',(e) => {
                if (!moreele.classList.contains('newdisplay')) {
                    moreele.classList.add('newdisplay')
                    const rotate = item.children[1]
                    rotate.classList.add('rotate')
                    morele2.classList.remove('newdisplay2')
                }
                else{
                    moreele.classList.remove('newdisplay')
                    const rotate = item.children[1]
                    rotate.classList.remove('rotate')
                }
            })
        }


        if (index == 1) {
            $(item).after(morele2)
            item.addEventListener('click',(e) => {
                if (!morele2.classList.contains('newdisplay2')) {
                    morele2.classList.add('newdisplay2')
                    const rotate1 = item.children[1]
                    rotate1.classList.add('rotate1')
                    moreele.classList.remove('newdisplay')
                    const rotate = item.children[1]
                    rotate.classList.remove('rotate')
                    
                }
                else{
                    morele2.classList.remove('newdisplay2')
                    const rotate1 = item.children[1]
                    rotate1.classList.remove('rotate1')
                }
            })
        }
    })

    //First Search Design
    const search = document.querySelector("#searchbar")
    const cancleBtns = document.querySelector("#cancleBtn")
    search.addEventListener('keyup', (e) => {
        if(search.value == ''){
            cancleBtns.style.display = 'none'
        }
        else{
            cancleBtns.style.display = 'block'
        }
    })
    cancleBtns.addEventListener('click', () => {
        search.value = ""
        cancleBtns.style.display = 'none'
    })
})


jQuery(() => {
    var scrollback = document.querySelector("#scrollback");
    var scrollforward = document.querySelector("#scrollforward");
    var carouselbody = document.querySelector(".carousel .carouselbody");
    scrollforward.addEventListener('click', () => {
        carouselbody.scrollLeft += 100;
    })

    scrollback.addEventListener('click', () => {
        carouselbody.scrollLeft -= 100;
    })

    let menu = document.querySelector("menu .menu");
    let menuclose = document.querySelector("menu .menu .menuclose");
    let menu_bar = document.querySelector(".navbar .menu");
    menu_bar.addEventListener('click', () => {
        if (!menu.classList.contains("menuopen")) {
            menu.classList.add("menuopen")
        }else{
            menu.classList.remove("menuopen")
        }
    })
    menuclose.addEventListener('click', () => {
        if (!menu.classList.contains("menuopen")) {
            menu.classList.add("menuopen")
        }else{
            menu.classList.remove("menuopen")
        } 
    })

    const category = document.querySelector(".carouselbody li.active");
    const category_inner = document.querySelector(".categories_inner");
    const chevron = document.getElementById("chevron");
    function category_hide(){
        const x = category_inner.classList;
        x.contains("category_show") ? 
        (x.remove("category_show"), chevron.innerHTML = `<a href="#">Services</a> <ion-icon name="chevron-down-outline"></ion-icon>`):
        (x.add("category_show"), chevron.innerHTML = `<a href="#">Services</a> <ion-icon name="chevron-up-outline"></ion-icon>`)
    }
    category.addEventListener('click', category_hide);
})

const another_search = document.querySelector(".another_search")
document.querySelector("#OtherSearchBtn").addEventListener('click', (e) => {
    if (another_search.classList.contains("open")) {
        another_search.classList.remove('open')
    }else{
        another_search.classList.add("open")
    }
})





