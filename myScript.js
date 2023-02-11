    function myFunction(){
         let x = document.getElementById("myTopnav");
         if (x.className === "topnav") {
           x.className += " responsive";
         } else {
           x.className = "topnav";
         }
   
    }
    var header = document.getElementById("myTopnav");
        var menuItems = header.getElementsByClassName("menu-item");
        for (var i = 0; i < menuItems.length; i++) {
          menuItems[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) { 
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
          });
        }
    
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    