const filter_btns = document.querySelectorAll(".filter-btn");/* return all the  available element*/
const skills_warp = document.querySelector(".skills");
const skill_bars = document.querySelectorAll(".skill-progress");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
})

footer_input.addEventListener("blur", () => {
  if(footer_input.value != "") return;
  footer_input.classList.remove("focus");
})

function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  
  hamburger_menu.addEventListener("click", ()=> {
    if(!navbar.classList.contains("open")){
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  })
  
  links.forEach((link) => link.addEventListener("click", () => closeMenu()));

//inital isotope
$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
    // checkScroll(skills_warp);
    skillsEffect();
  })

filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add('active');

        let filterValue = btn.dataset.filter;
        // console.log(filterValue)
        $(".grid").isotope({ filter: filterValue });
    });
});

function checkScroll(el) {
    let rect = el.getBoundingClientRect(); //获取元素到浏览器顶部的距离
    // windows height >= element's top position + element's height
    // console.log(rect.top);
    if (window.innerHeight >= rect.top + el.offsetHeight) {
        // console.log("true")
        return true;
    }
    // console.log("false")
    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_warp)) {
        skill_bars.forEach(skill => skill.style.width = 0);
        return;
    }
    skill_bars.forEach(skill => skill.style.width = skill.dataset.progress);
}