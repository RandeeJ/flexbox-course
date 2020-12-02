// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "grid";
//   }
// }

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myLinks").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// $.noConflict();

// jQuery(document).ready(function ($) {
//   $(".dropdown").on("click", function () {
//     $("ul").slideToggle();

//     $(this).toggleClass("open");
//   });
// });

// function mobileMenu() {
//        var node = document.getElementById("myLinks");
//        document.getElementById("menu-display").appendChild(node);
//        toggle();
// }

// function toggle() {
//        var x = document.getElementById("menu-display");
//        if (x.style.display === "block") {
//               x.style.display = "none";
//        }
//        else {
//               x.style.display = "block";
//        }
// }
// document.getElementById("menu-link").addEventListener("click", mobileMenu);

function toggle() {
  //Declare variable
  let menu = doument.getElementById("dropdown-content");

  //toggle code
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "none";
  }
}

document.getElementById("dropbtn").addEventListener("click", toggle);
