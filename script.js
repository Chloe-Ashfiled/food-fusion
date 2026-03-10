'user strict'

const header=document.querySelector("[dataHeader]")

window.addEventListener("scroll",function(){
    if(this.window.scrollY>=100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});
//[] is use because we want to select an html attribute not a class or element
const navbar=document.querySelector("[data-navbar]")
const navbarLinks=document.querySelectorAll("[dataNavLink]");
const menuToggleBtn=document.querySelector("[dataNavToggleBtn]");

menuToggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
})

//close menu when a link is clicked
for(let i=0;i<navbarLinks.length;i++){
    navbarLinks[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    })
}

const searchBtn=document.querySelector("[dataSearchBtn]");
const searchContainer=document.querySelector("[dataSearchContainer]");
const searchEnterBtn=document.querySelector("[dataSearchEnterBtn]");
const searchCancelBtn=document.querySelector("[dataSearchCancelBtn]");

const searchBoxElements=[searchBtn,searchCancelBtn,searchEnterBtn];

for(let i=0;i<searchBoxElements.length;i++){
    searchBoxElements[i].addEventListener("click",function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}