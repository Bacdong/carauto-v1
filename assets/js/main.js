
//Set time carousel
$(function () {
    $('input[type="radio"]').addClass('radio-carousel');

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
});








