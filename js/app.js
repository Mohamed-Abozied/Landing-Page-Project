/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const allSections = document.querySelectorAll('section');
const ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

//for loop for each element & creating new elements 

allSections.forEach((section) => {
    let linktext = section.getAttribute('data-nav');

    let textInside = document.createTextNode(linktext);

    let newli = document.createElement('li');

    let linkA = document.createElement('a');

    linkA.appendChild(textInside);
    newli.appendChild(linkA);
    fragment.appendChild(newli);

    linkA.addEventListener('click' , function(){
      section.scrollIntoView({behavior:"smooth"})
    })
});

//add fragment to the UL to reduce repaint and reflow.
ul.appendChild(fragment);


//Add some styling to nav-menu.
ul.style.color = '#A7CFCF';
ul.style.backgroundColor = '#0A4A4A';




//set a function to link data-nav with the active link.
function active_link(active_section){

  let newSection = active_section.getAttribute('data-nav');

  let allLinks = document.querySelectorAll('a');

  allLinks.forEach((link) => {
    if (link.textContent == newSection){
      allLinks.forEach((link) => {
        link.classList.remove('menu__link');
      });
      link.classList.add('menu__link');
      }
      
    });
  };


//activeSection a function to get info about which element inside the viewport and add a class to it.

function activeSection(){
  allSections.forEach((section) => {

    let rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= 150) {
      allSections.forEach((section) => {
        section.classList.remove('your-active-class');

      });
      section.classList.add('your-active-class');
      active_link(section);
    };

  });





};

window.addEventListener(
    'scroll',
    function (e) {
        e.preventDefault();
        activeSection();
    },
    false)
