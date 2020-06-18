$(document).ready(function(){

    //open menu
    $('#hamb').click(function(){
        $('#menu').css('display', 'block');
        $('#menu').addClass('menuAppear');
    });
    
    //close menu
    $('#exitMenu').click(function(){
        $('#menu').css('display', 'none');
        $('#menu').removeClass('menuAppear');
    });

});