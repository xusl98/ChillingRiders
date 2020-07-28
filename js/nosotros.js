$(document).ready(function () {


    var myObject = $("#texto");
    var myposition = myObject.offset();
    


    $('#texto1').css({ 'width': $('#texto').css('width') });
    $('#texto1').css({ 'height': $('#texto').css('height') });
    $('#texto1').css({ 'padding-left': $('#texto').css('padding-left') });
    $('#texto1').css({ 'padding-top': $('#texto').css('padding-top') });
    $('#texto1').animate({ 'top': myposition.top, 'left': myposition.left }, 1000, function (){
        $('#texto1').css('display', 'none');
        $('#texto').css('visibility', 'visible');
    });
    $('.upwards').animate({ 'marginTop': '0%' }, 1000);
    $('.downwards').animate({ 'marginTop': '0%' }, 1000);
    $('#verticalText').animate({ 'bottom': '24vh' }, 1000);

});