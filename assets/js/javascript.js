
  

/* PER PARTE ALTA  */


    const nav = document.querySelector('#nav');
    let topOfNav = nav.offsetTop;
    function fixNav() {
      if (window.scrollY >= topOfNav && window.innerWidth>=1200 ) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
      
      
      if (window.scrollY >= topOfNav && window.innerWidth<=1200 ) {
        document.body.classList.add('fixed-nav');
      }

      
      
    }
    window.addEventListener('scroll', fixNav);




/* L'HAMBURGER è PREMUTO */
var hamburger = document.getElementById("toggleNav");

hamburger.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav__menu");
  
 /* element.classList.toggle("open");*/
  document.body.classList.toggle("open");
   
 
}


// PER SLIDER AUTOMATICO
onload  = start;

function start(){ 
var i = 1;
function Move(){  
  i = (i%4)+1; // 4 è il numero delle immagini che ho messo nello slider
  document.getElementById('i'+i).checked = true; // va avanti e me li checked tutti
}
setInterval(Move,3000); //cambia img in 3 sec
};




/*   FUNZIONE PER SMOOTH SCROLL 


NOTA PER PROF !!!!!!!!
 QUESTA FUNZIONE QUI SOTTO NON è STATA CREATA DA ME, MA PRESA ONLINE,
  DATO CHE IL SITO VERRà REALMENTE UTILIZZATO MI SAREBBE UTILE, 
  NON DEVE OVVIAMENTE ESSERE CONSIDERATA AI FINI DELLA VALUTAZIONE SCOLASTICA .

nota per me:
ti basta aggiungere la classe scroll a quelli che vuoi far scrollare a un id giù

*/


(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);
       
        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 2000);  /*QUI SETTO LA VELOCITà */
                }

            }, false);

        });

    }

 })();

