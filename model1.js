// Smooth Scroll Effect for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Animation on Scroll
window.addEventListener('scroll', function () {
     let header = document.querySelector('header');
     if (window.scrollY > 50) {
         header.style.background = "e0e0e0";
         header.style.transition = "background 0.3s ease-in-out";
     } else {
         header.style.background = "f4f4f4";
     }
})


window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-shrink'); // Shrink height and add shadow
    } else {
        header.classList.remove('header-shrink'); // Restore height when at top
    }
});


