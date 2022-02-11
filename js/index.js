const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-navigation-toggle');
const navLinks = document.querySelectorAll('.primary-navigation-link');
let menuIcon = document.querySelector('.mobile-navigation-menu');

// vid klick på iconen, toggla menyn 
navToggle.addEventListener('click', toggleMenu);

// vid klick på någon länk i menyn, toggla menyn
navLinks.forEach(el => el.addEventListener('click', toggleMenu));

//funktion för att toggla mennyn
function toggleMenu()
{
    const visibility = primaryNav.getAttribute("data-visible");
    
    // om menyn är infälld/inte synlig
    if (visibility === 'false') {
        // fäll ut menyn/gör den synlig
        primaryNav.setAttribute("data-visible", true)
        // sätter aria-expanded till true eftersom menyn är expanderad
        navToggle.setAttribute('aria-expanded', true)
        // ändra position för ikonen till fixed, så att den följer med vid scroll
        navToggle.style.position = "fixed";
        // ändra iconen från hamburgermeny till kryss
        menuIcon.innerHTML = menuIcon.innerHTML.replace('menu','close');
    }
    // om menyn är utfälld/synlig
    else {
        // fäll in menyn/gör den osynlig
        primaryNav.setAttribute("data-visible", false)
        // sätter aria-expanded till false eftersom menyn inte är expanderad
        navToggle.setAttribute('aria-expanded', false)
        // ändra position för ikonen till absolute, så att den ligger kvar vid scroll
        navToggle.style.position = "absolute";
        menuIcon.innerHTML = menuIcon.innerHTML.replace('close', 'menu');
    }
};

