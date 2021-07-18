const modalOpen = document.querySelector(".back-project") ;
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const modalSuccess = document.querySelector(".modal-success-opacity");
const closeModalSuccess = document.querySelector(".got-it");
modalOpen.addEventListener("click", function () {
    modal.style.display = " block";

    
    
});
closeModal.addEventListener("click", function () {
    modal.style.display = " none";

    
    
});
document.getElementById("myform").addEventListener("submit", function(e) {
    modalSuccess.style.display="block";
    modal.style.display = " none";

    e.preventDefault();

    
});
document.getElementById("myformtwo").addEventListener("submit", function(e) {
    modalSuccess.style.display="block";
    modal.style.display = " none";

    e.preventDefault();

    
});
document.getElementById("myformtree").addEventListener("submit", function(e) {
    modalSuccess.style.display="block";
    modal.style.display = " none";

    e.preventDefault();

    
});
document.getElementById("myformfour").addEventListener("submit", function(e) {
    modalSuccess.style.display="block";
    modal.style.display = " none";

    e.preventDefault();

    
});
document.getElementById("bamboo-tags").addEventListener("click", function(e) {
    modal.style.display = " block";

    e.preventDefault();

    
});
document.getElementById("black-tags").addEventListener("click", function(e) {
    modal.style.display = " block";

    e.preventDefault();

    
});
document.getElementById("mahogany-tags").addEventListener("click", function(e) {
    modal.style.display = " block";

    e.preventDefault();

    
});


closeModalSuccess.addEventListener("click", function () {

    modalSuccess.style.display="none";
});
