const openMenu = document.querySelector(".icon-hamburger");
const closeMenu = document.querySelector(".icon-close-menu");
const navi = document.querySelector(".navigation");

document.getElementById("hamburger").addEventListener("click" , function(e) {
    e.preventDefault();
    openMenu.style.display="none";
    closeMenu.style.display="block";
    navi.style.display="block";
   
   
   
});
closeMenu.addEventListener("click" , function(e) {
    openMenu.style.display="block";
    closeMenu.style.display="none";
    navi.style.display="none";
    e.preventDefault();
   

    
});





