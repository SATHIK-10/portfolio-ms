
// button ripple effect start
const button = document.querySelector('.btn');

button.addEventListener("mouseover", (event) => {
    const x = event.clientX - button.offsetLeft;
    const y = event.clientY - button.offsetTop;

    button.style.setProperty("--xpos", x + "px");
    button.style.setProperty("--ypos", y + "px");
})
// button ripple effect end

//services modal js start
let view = document.querySelectorAll('.services__modal');
let btn0 = document.querySelectorAll('.modalopen');
let closes = document.querySelectorAll('.services__modal_close');

let modal = function (modalclick) {
    view[modalclick].classList.add('active_modal')
}

let closeit = function (modalclck) {
    view[modalclck].classList.remove('active_modal')
}

btn0.forEach((modalbtn, i) => {
    modalbtn.addEventListener("click", () => {
        modal(i);
    })
})

closes.forEach((modalclosed, i) => {
    modalclosed.addEventListener("click", () => {
        closeit(i);
    })
})
//services modal js end
// portfolio modal js start

function views(e) {
    e.classList.add('open');
}
function closethisshit(e) {
    e.classList.remove('open');
}

let img1 = document.querySelector('.portfolio__img_inner1')
let img2 = document.querySelector('.portfolio__img_inner2')
let img3 = document.querySelector('.portfolio__img_inner3')
let img4 = document.querySelector('.portfolio__img_inner4')
let img5 = document.querySelector('.portfolio__img_inner5')
let img6 = document.querySelector('.portfolio__img_inner6')
let portfolioview1 = document.querySelector('.img__popup_1')
let portfolioview2 = document.querySelector('.img__popup_2')
let portfolioview3 = document.querySelector('.img__popup_3')
let portfolioview4 = document.querySelector('.img__popup_4')
let portfolioview5 = document.querySelector('.img__popup_5')
let portfolioview6 = document.querySelector('.img__popup_6')
let closethis1 = document.querySelector('.portfolio__popup_close1')
let closethis2 = document.querySelector('.portfolio__popup_close2')
let closethis3 = document.querySelector('.portfolio__popup_close3')
let closethis4 = document.querySelector('.portfolio__popup_close4')
let closethis5 = document.querySelector('.portfolio__popup_close5')
let closethis6 = document.querySelector('.portfolio__popup_close6')

img1.addEventListener("click", () => {
    views(portfolioview1);
})
closethis1.addEventListener("click", () => {
    closethisshit(portfolioview1);
})

img2.addEventListener("click", () => {
    views(portfolioview2);
})
closethis2.addEventListener("click", () => {
    closethisshit(portfolioview2);
})

img3.addEventListener("click", () => {
    views(portfolioview3);
})
closethis3.addEventListener("click", () => {
    closethisshit(portfolioview3);
})

img4.addEventListener("click", () => {
    views(portfolioview4);
})

closethis4.addEventListener("click", () => {
    closethisshit(portfolioview4);
})

img5.addEventListener("click", () => {
    views(portfolioview5);
})
closethis5.addEventListener("click", () => {
    closethisshit(portfolioview5);
})

img6.addEventListener("click", () => {
    views(portfolioview6);
})
closethis6.addEventListener("click", () => {
    closethisshit(portfolioview6);
})

// portfolio modal js end

// typed animation js

var typed = new Typed(".typing",{
    strings: ["","Mern Developer","UI/UX Developer","Data Analyst", "Student"],
    typeSpeed: 100,
    BackSpeed: 80,
    loop: true
})

// side nav toggler when use in phone


let navtoggler = document.getElementById("navsidetoggler");
const asidenavbar = document.querySelector("#asidebar");
// let main_content_of_portfolio_suhail = document.querySelector("#main_content_of_portfolio");

navtoggler.addEventListener("click",()=>{
    asidenavbar.classList.toggle("pushnav");
    if(asidenavbar.classList.contains("pushnav")){
        navtoggler.style.left = "290px";
    }else{
        navtoggler.style.left = "18px";
    }
})

window.addEventListener("scroll", ()=>{
    if(document.querySelector("#asidebar").classList.contains("pushnav")){
        document.querySelector("#asidebar").classList.remove("pushnav");
        navtoggler.style.left = "18px";
    }
})


/* scrolling vanish appear effect */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("act");
      } else {
        reveals[i].classList.remove("act");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


//navbar active

let homenav = document.querySelector('#homenav');
let aboutnav = document.querySelector('#aboutnav');
let servicesnav = document.querySelector('#servicesnav');
let portfolionav = document.querySelector('#portfolionav');
let contactnav = document.querySelector('#contactnav');

window.addEventListener("scroll", () => {
  const y = window.pageYOffset;

  // Clear all active classes first
  homenav.classList.remove("active");
  aboutnav.classList.remove("active");
  servicesnav.classList.remove("active");
  portfolionav.classList.remove("active");
  contactnav.classList.remove("active");

  if (y >= 0 && y < 494.4) {
    homenav.classList.add("active");
  } else if (y >= 494.4 && y < 2600) {
    aboutnav.classList.add("active");
  } else if (y >= 2600 && y < 3500) {
    servicesnav.classList.add("active");
  } else if (y >= 3500 && y < 4400) {
    portfolionav.classList.add("active");
  } else if (y >= 4400) {
    contactnav.classList.add("active");
  }
});
