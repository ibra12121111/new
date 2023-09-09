const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
function search(){
    let searchBar = document.querySelector('.search-input').value.toUpperCase();
    let productList = document.querySelector('.product-list');
    let product = document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('h2');

    for (let i = 0; i<productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            product[i].style.display ="";
        } else {
            product[i].style.display ="none";
        }
    }
}