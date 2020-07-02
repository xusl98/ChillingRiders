$(document).ready(function () {
    $('#texto1').css({ 'width': $('#texto').css('width') });
    $('#texto1').animate({ 'top': '37.1vh', 'left': '3.4vw' }, 1000);
    setTimeout(function(){ 
        $('#texto1').css('display', 'none');
        $('#texto').css('visibility', 'visible');
     }, 990);
    $('.upwards').animate({ 'marginTop': '0%' }, 1000);
    $('.downwards').animate({ 'marginTop': '0%' }, 1000);
    $('#verticalText').animate({ 'bottom': '18vh' }, 1000);

});