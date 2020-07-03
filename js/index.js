let toggleLinks = document.querySelector('.toggle-links');
let navLinks = document.querySelector('.nav-disktop');
let mainHeading = document.querySelector('.main h1');

let navOpen = false;






// toggleLinks Click EventListener

toggleLinks.addEventListener('click', e => {
    if(!navOpen){
        toggleLinks.classList.add('animate-toggle')
        navLinks.style.display = 'flex';
        mainHeading.style.transform = 'translate(-50%,47%)'
        navOpen = true;

    }
    else{
        toggleLinks.classList.remove('animate-toggle')
        mainHeading.style.transform = 'translate(-50%,-50%)'
        navLinks.style.display = 'none';
        navOpen = false;
    }
})
// adding the parallex effect to the site 
let animatedElements = []
animatedElements.push( document.querySelector('.about .description'));
animatedElements.push(...document.querySelectorAll('.skills-items .skills-item'));
animatedElements.push(document.querySelector('.skills .icons'));
animatedElements.push(...document.querySelectorAll('.portfolio-item .image'));
animatedElements.push(...document.querySelectorAll('.portfolio-item .descreption'));
let footerButton = document.querySelector('.contact .contact-footer button')
let footerImage = document.querySelector('.contact .contact-footer img')
animatedElements.push(footerImage);
animatedElements.push(footerButton);
window.addEventListener('scroll',()=>{
    
    animatedElements.forEach((item)=>{ 
        if(window.pageYOffset + document.documentElement.clientHeight >=item.offsetTop+item.clientHeight/4){
                item.classList.add('grow');
        }
    })
        
});
// animation for the experience list
let animatedList = document.querySelector('.experience .experience-list');
window.addEventListener('scroll',()=>{
    
        if(
            window.pageYOffset + 
            document.documentElement.clientHeight >=
            animatedList.offsetTop+animatedList.clientHeight/4){
            animatedList.classList.add('grow');
        }
        
});