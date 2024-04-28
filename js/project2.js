window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);

})


/**---------------top to button------------------ */
const scrollTopBtn=document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",function(){
  scrollTopBtn.classList.toggle("active",window.scrollY>500);
})

scrollTopBtn.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
})
/**---------------top to button------------------ */
/**The classList is a property of DOM elements in JavaScript that provides an interface to manipulate the classes of an HTML element. It is essentially a collection of methods that allow you to add, remove, toggle, and check for the presence of CSS classes on an element.

Here are some of the key methods provided by the classList property:

add(className): Adds a specified class to the element.
remove(className): Removes a specified class from the element.
toggle(className): Toggles the presence of a class. If the class exists, it is removed; if it does not exist, it is added.
contains(className): Checks if the element has a specified class. Returns true if it does, and false otherwise. */

document.addEventListener("DOMContentLoaded", function () {
    const modalContainer = document.querySelectorAll('.service-modal');
    const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
      learnMoreBtn.forEach(fun);
      function fun(val,ind,ar){
        val.addEventListener('click',function(){
            modalContainer[ind].classList.toggle('active');
        })
      }
      const closeBtn = document.querySelectorAll('.service-modal-body .modal-close-btn');
      let y=0;
      closeBtn.forEach(funct);
      function funct(val,ind,ar){
        val.addEventListener('click',function(){
            modalContainer[ind].classList.remove('active');
        })
      }
    });
   
      const portfolioElements = document.querySelectorAll('.portfolio-model');
      const learnMoreBtn = document.querySelectorAll('.img-card');
        learnMoreBtn.forEach(fu);
        function fu(val,ind,ar){
          val.addEventListener('click',function(){
          
              portfolioElements[ind].classList.toggle('active');
             
            
  
          })
        }
        const closeBtnn = document.querySelectorAll('.portfolio-close-btn');
        closeBtnn.forEach(func);
        function func(val,ind,ar){
          val.addEventListener('click',function(){
              portfolioElements[ind].classList.remove('active');
          })
        }
      /**------------------------swiper---------------------------------- */
    
      var swiper = new Swiper(".reference-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      const themeBtn=document.querySelector(".theme-btn");
      themeBtn.addEventListener("click",()=>{
        document.body.classList.toggle("dark-theme"); 
        themeBtn.classList.toggle("sun");

        localStorage.setItem("saved-theme",getCurrentTheme());
        localStorage.setItem("saved-icon",getCurrentIcon());


      });
      const getCurrentTheme=()=>document.body.classList.contains("dark-theme")?"dark":"light";
      const getCurrentIcon=()=>themeBtn.body.classList.contains("sun")?"sun":"moon";

      const savedTheme=localStorage.getItem("saved-theme");
      const savedIcon=localStorage.getItem("saved-icon");

      if(savedTheme){
        document.body.classList[savedTheme === "dark" ? "add" :"remove"]("dark-theme");
        themeBtn.classList[savedIcon==="sun" ? "add" : "remove"]("sun");
      }

      const menuBtn=document.querySelector(".fa-solid.fa-bars");
      const nav=document.querySelector(".navigation");
      const closeBtn=document.querySelector(".fa-solid.fa-circle-xmark");
      const options = document.querySelectorAll(".nav-items a")
      menuBtn.addEventListener("click",()=>{
        nav.classList.toggle("active");
      })
      closeBtn.addEventListener("click",()=>{
        nav.classList.remove("active");
      })
      options.forEach(function(currentVal){
        currentVal.addEventListener("click",()=>{
          nav.classList.remove("active");
        });
      });

/**scroll reveal */
ScrollReveal({ distance:'600px',duration:2500,delay:100 });

ScrollReveal(). reveal(' .home .info h2, .section-title-1, .section-title-2', { delay: 400, origin: 'left'}); 
ScrollReveal() .reveal(' .home .info h3, .home .info p, .about-info .btn', { delay: 500, origin: 'right' });
ScrollReveal(). reveal('.home .info .btn', { delay: 600, origin: 'bottom' }); 
ScrollReveal() .reveal('.media-icons i, .contact-left li', { delay: 400, origin: 'left', interval: 200 }); 
ScrollReveal().reveal('.home-img, .about-img', {delay: 400, origin: 'bottom' }); 
ScrollReveal() .reveal('.about .description, .contact-right', { delay: 500, origin: 'right' }); 
ScrollReveal(). reveal('.about .professional-list li', { delay: 400, origin: 'right', interval: 200 }); 
ScrollReveal() .reveal('.skills-description, .services-description, .contact-card, .reference-swiper, .contact-left h2', { delay: 600, origin: 'left' }); 
ScrollReveal() .reveal('.skills, .experience-card, .service-card, .education, .portfolio .img-card', { delay: 700, origin: 'bottom', interval: 200 }); 
ScrollReveal() .reveal('footer .group', { delay:400, origin: 'top', interval: 200 });





    const scriptURL = 'https://script.google.com/macros/s/AKfycbyJEnuBdlUjxUuLwKXXVjzWTFy75u5LhZ4V8gwbKtPPmofR2kwgNaaftjDbwE6KSY4/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("submit-message");
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        msg.innerHTML="Just now, I received your message. Thank you for your correspondence."
        setTimeout(function(){
            msg.innerHTML=""

        },5000)
        form.reset()
        .catch(error => console.error('Error!', error.message))
    })
  