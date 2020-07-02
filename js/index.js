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