const header = document.querySelector("header");
const header_title = document.querySelector(".header-title");
const header_text = document.querySelector(".text");
// const header_imgs = document.querySelectorAll("img");
const person_img = document.querySelector(".person");
const section_title = document.querySelector(".title")


//offsetHeight = height + border + padding + horizontal scrollbar  
let header_height = header.offsetHeight;

window.addEventListener('scroll', ()=>{
    // get the number of pixels by which we scrolled upward everytime we scroll the page,
    let scroll = window.pageYOffset;
     // as we scroll the page, we need to get the top position of the section relative to the viewport
    //  let sectionY = section.getBoundingClientRect();

    // set opacity value base on the scroll value and header_height
    header_title.style.opacity = - scroll / (header_height / 2) + 1;
    header_text.style.opacity = - scroll / (header_height / 2) + 1;
    person_img.style.opacity = - scroll / (header_height / 2) + 1;
    let speed = person_img.dataset.speed;
    person_img.style.transform = `translateY(${scroll * speed}px)`;

    // header_imgs.forEach(img => {
    //     let speed = img.dataset.speed;
    //     img.style.transform = `translateY(${scroll * speed}px)`;
    //     person_img.style.opacity = - scroll / (header_height / 2) + 1;
    // });

     section_title.dataset.width = "100px";
   
       
    
    

});