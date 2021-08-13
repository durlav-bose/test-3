
const burger = document.querySelector(".burger");
const nav =document.querySelector(".nav-links");

const navLinks= document.querySelectorAll(".nav-links li");
const x= document.querySelector(".x");

burger.addEventListener('click',() => {
    nav.classList.add("nav-active");
    

    navLinks.forEach((link,index) => {
        if (link.style.animation)
        {
            link.style.animation = "";
        }
    
        else {
            link.style.animation = `navlinkfade 0.5s ease forwards ${index / 5 }s`;
        }
    });

    
});


x.addEventListener('click',()=>{
    nav.classList.remove("nav-active");
    
});

