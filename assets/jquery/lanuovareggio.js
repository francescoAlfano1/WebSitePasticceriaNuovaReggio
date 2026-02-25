
$(document).ready(function(){


nuovareggio(); /*richiamo la mia funzione una volta */

                                                                                          
function nuovareggio(){
      setTimeout(function(){$("#lanuovareggio").fadeOut();}, 0);
          setTimeout(function(){$("#lanuovareggio").fadeIn();}, 500); 
          setTimeout(function(){document.getElementById("lanuovareggio").innerHTML = "passione";}, 500);
          setTimeout(function(){$("#lanuovareggio").fadeOut();}, 5000); /*dopo 4s (da 500 a 5000 ) scopare arte */
          setTimeout(function(){$("#lanuovareggio").fadeIn();}, 6000); /* per 1 sec sfumatura da 5000 da 6000 , a 6s si vede, cosa?*/
            setTimeout(function(){document.getElementById("lanuovareggio").innerHTML = "arte ";}, 6000);/* questo*/
 setTimeout(function(){$("#lanuovareggio").fadeOut();}, 10000); /*dopo 4s  scopare  */
          setTimeout(function(){$("#lanuovareggio").fadeIn();}, 11000);
            setTimeout(function(){document.getElementById("lanuovareggio").innerHTML = "sapore ed originalità";}, 11000);
             setTimeout(function(){$("#lanuovareggio").fadeOut();}, 15000); /*dopo 4s  scopare  */
          setTimeout(function(){$("#lanuovareggio").fadeIn();}, 16000);
                       setTimeout(function(){document.getElementById("lanuovareggio").innerHTML = "qualità e freschezza";}, 16000); 
 setTimeout(function(){$("#lanuovareggio").fadeOut();}, 20000); /*dopo 4s  scopare  */
  setTimeout(function(){$("#lanuovareggio").fadeOut();}, 21000); /*dopo 4s  scopare  */
   setTimeout(function(){document.getElementById("lanuovareggio").innerHTML = "artigiani";}, 21000); 
         setTimeout(function(){$("#lanuovareggio").fadeOut();}, 25000); /*dopo 4s  scopare  */
}
     




});





 




       