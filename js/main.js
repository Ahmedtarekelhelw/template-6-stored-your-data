// toggle menu in nav
let links = document.querySelector("nav .links")
let toggle = document.querySelector("nav i")

toggle.onclick = function() {
    links.classList.toggle("show")
}

// remove links when click on link
let aTag = document.querySelectorAll("nav .links li a")
aTag.forEach(a => a.addEventListener("click" , function() {
    links.classList.remove("show")
}))

// slider in landing
let imgs = document.querySelectorAll(".landing img");

let imgsCounter = 1;
function changeImg() {
    if(imgsCounter <= imgs.length -1) {
        imgs.forEach(img =>img.classList.remove("active"))
        imgs[imgsCounter].classList.add("active")
        imgsCounter++;
        setTimeout(function() {
            if (imgs[imgs.length - 1].classList.contains("active")) {
                imgsCounter = 0;
            }
        }, 4000)
    }
}
let interval = setInterval(changeImg , 6000)


// ourskills
progSpan = document.querySelectorAll(".prog span")
ourSkills = document.querySelector(".our-skills")

window.onscroll = function() {
    // height of scroll to reach to my section
    let skillsOffsetTop = ourSkills.offsetTop;
    // get height of my section
    let skillsOuterHeight = ourSkills.offsetHeight;
    // Window Height that apper on the screen to my eyes
    let windowHeight = this.innerHeight;

    // Window ScrollTop  == scrollY
    let windowScrollTop = this.pageYOffset;
    progSpan.forEach(span => {
        if (scrollY >= skillsOffsetTop) {
            span.style.width = span.dataset.value
        }
    })
}


//our-gallery section
let overlay = document.querySelector(".our-gallery .overlay")
let galleryImgs = document.querySelectorAll(".our-gallery .gallery-imgs img")
let apperImg = document.querySelector(".our-gallery .overlay img")
let h4 = document.querySelector(".our-gallery .overlay h4")

galleryImgs.forEach(img => img.addEventListener("click" , function() {
    overlay.style.display="block"
    apperImg.src = img.src
    h4.textContent = img.alt
}))

let xIcon = document.querySelector(".our-gallery .overlay i")
xIcon.onclick = function() {
    overlay.style.display = "none"
}


// rotate setting icon in change box when open
// apper and disapper of change box on click on setting icon
let gearIcon = document.querySelector(".icon")
let changeBox = document.querySelector(".change-box")
gearIcon.onclick = function () {
    changeBox.classList.toggle("open")
    let settingIcon = document.querySelector(".icon i")
    if (changeBox.classList.contains("open")) {
        settingIcon.classList.add("fa-spin")
    }else {
        settingIcon.classList.remove("fa-spin")
    }
}



// add and remove active class in change box in colors when click
let lis = document.querySelectorAll(".change-box .colors li")
lis.forEach(li => li.addEventListener("click" ,function(e) {
    lis.forEach(l => l.classList.remove("active"))
    e.target.classList.add("active")
    // change the maincolor variable 
    document.documentElement.style.setProperty("--mainColor", e.target.dataset.color)
    //set the value of local storage
    window.localStorage.color = e.target.dataset.color
}))

// check if localStorage have a value to set it when reload
if (window.localStorage.color) {
    document.documentElement.style.setProperty("--mainColor", window.localStorage.color)
    // get the li that selected it is color and add class active to it
    lis.forEach(ele => {
        ele.classList.remove("active")
        if (window.localStorage.color === ele.dataset.color) {
            ele.classList.add("active")
        }
    })
}



// add and remove active class in changeBox in random background
let backgSpan = document.querySelectorAll(".change-box .background span")

backgSpan.forEach(s => s.addEventListener("click" ,function(e) {
    backgSpan.forEach(sp => sp.classList.remove("active"))
    e.target.classList.add("active")
    if (e.target.textContent === "yes") {
        interval = setInterval(changeImg, 6000)
        window.localStorage.background = "yes"
    }else {
        clearInterval(interval)
        window.localStorage.background = "no"
    }
}))


// check if localStorage have a value to set it when reload or
if (window.localStorage.background === "no") {
    clearInterval(interval)
    backgSpan.forEach(s => {
        s.classList.remove("active")
        if (s.textContent === window.localStorage.background) {
            s.classList.add("active")
        }
    })
}



// add and remove active class in changeBox in show bullets
let bulletsSpan = document.querySelectorAll(".change-box .show-bullets span")
let bullets = document.querySelector(".bullets")
bulletsSpan.forEach(s => s.addEventListener("click" ,function(e) {
    bulletsSpan.forEach(sp => sp.classList.remove("active"))
    e.target.classList.add("active")
    if (e.target.textContent === "no") {
        bullets.style.display="none"
        window.localStorage.display = "no"
    }else {
        bullets.style.display="block"
        window.localStorage.display = "yes"
    }
}))

// check if localStorage have a value to set it when reload
if (window.localStorage.display === "no") {
    bullets.style.display = "none"
    for (let i = 0; i < bulletsSpan.length; i++) {
        bulletsSpan[i].classList.remove("active")
        if (window.localStorage.display === bulletsSpan[i].textContent) {
            bulletsSpan[i].classList.add("active")
        }
    }
}



// reset all setting
let resetBtn = document.querySelector("button[type='reset']")
resetBtn.onclick = function () {
    window.localStorage.clear()
    window.location.reload()
}







