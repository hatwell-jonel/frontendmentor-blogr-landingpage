const icon = document.querySelector(".icon");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");

icon.addEventListener("click", (e) =>{
  if(hamburgerIcon.classList == "hamburger"){
    // navMenu.style.display = "block";
    navMenu.classList.add("nav-show")
    hamburgerIcon.classList = "close";
  }
  else if(hamburgerIcon.classList == "close"){
    // navMenu.style.display = "none";
    navMenu.classList.remove("nav-show")
    hamburgerIcon.classList = "hamburger";
  }
})


const items = document.querySelectorAll(".nav-menu__item");

items.forEach( (item) => {
  const title = item.querySelector(".title");

  title.addEventListener('click', e =>{

    items.forEach(function(menu) {
      if(menu !== item){
        menu.classList.remove("show-links")
      }
    });
    
    item.classList.toggle('show-links')
  })
});