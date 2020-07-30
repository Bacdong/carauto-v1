
//Set time carousel
var inputElementRadio = document.querySelectorAll(".radio-carousel");
var lengthInputElement = inputElementRadio.length;
var index = 0;
setInterval(() => { 

    if (index > lengthInputElement- 1) {
        index = 0;
    }   
    
    inputElementRadio[index].checked = true;

    index++;

}, 2000)


//show/hidden nav
var inputElementTypeCheckbox = document.querySelector("#hidden-show-nav");
var headerElement = document.querySelector(".header");
var divElementNav = document.querySelector(".navbars-reponsive");
var widthHeaderElement = $(headerElement).width();

// inputElementTypeCheckbox.addEventListener("click", () => {
//     if(inputElementTypeCheckbox.checked == true) {
//         headerElement.style.display = "block";
//         headerElement.style.width = "50%"
//         divElementNav.style.left = "20%"
//     } else {
//         headerElement.style.display = "none";
//         divElementNav.style.left = "2%"
//     }
// })



