
$(document).ready(function(){

passione(); /*richiamo la mia funzione una volta */
                                                                                  
function passione(){
      setTimeout(function(){$("#arteepassione").fadeOut();}, 0);
          setTimeout(function(){$("#arteepassione").fadeIn();}, 500); 
          setTimeout(function(){document.getElementById("arteepassione").innerHTML = "passione";}, 500);
          setTimeout(function(){$("#arteepassione").fadeOut();}, 5000); /*dopo 4s (da 500 a 5000 ) scopare arte */
          setTimeout(function(){$("#arteepassione").fadeIn();}, 6000); /* per 1 sec sfumatura da 5000 da 6000 , a 6s si vede, cosa?*/
            setTimeout(function(){document.getElementById("arteepassione").innerHTML = "arte ";}, 6000);/* questo*/
 setTimeout(function(){$("#arteepassione").fadeOut();}, 10000); /*dopo 4s  scopare  */
          setTimeout(function(){$("#arteepassione").fadeIn();}, 11000);
            setTimeout(function(){document.getElementById("arteepassione").innerHTML = "sapore ed originalità";}, 11000);
             setTimeout(function(){$("#arteepassione").fadeOut();}, 15000); /*dopo 4s  scopare  */
          setTimeout(function(){$("#arteepassione").fadeIn();}, 16000);
                       setTimeout(function(){document.getElementById("arteepassione").innerHTML = "qualità e freschezza";}, 16000); 
 setTimeout(function(){$("#arteepassione").fadeOut();}, 20000); /*dopo 4s  scopare  */
  setTimeout(function(){$("#arteepassione").fadeOut();}, 21000); /*dopo 4s  scopare  */
   setTimeout(function(){document.getElementById("arteepassione").innerHTML = "artigiani";}, 21000); 
         setTimeout(function(){$("#arteepassione").fadeOut();}, 25000); /*dopo 4s  scopare  */
}
     




});





 




       