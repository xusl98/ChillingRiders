$(document).ready(function(){

    //open menu
    $('#hamb').click(function(){
        $('#menu').css('display', 'block');
        $('#menu').addClass('menuAppear');
        setTimeout(function(){ 
            $('#serviciosItem').css('display', 'block');
            $('#serviciosItem').animate({ 'marginTop': '0' }, 1500);
            // $('#serviciosItem').addClass('servicioItemAppear');
         }, 1500);
        setTimeout(function(){ 
            $('#portfolioItem').css('display', 'block');
            $('#portfolioItem').animate({ 'marginTop': '0' }, 1500);
            // $('#serviciosItem').addClass('servicioItemAppear');
         }, 1700);
        setTimeout(function(){ 
            $('#nosotrosItem').css('display', 'block');
            $('#nosotrosItem').animate({ 'marginTop': '0' }, 1500);
            // $('#serviciosItem').addClass('servicioItemAppear');
         }, 1900);
        setTimeout(function(){ 
            $('#contactoItem').css('display', 'block');
            $('#contactoItem').animate({ 'marginTop': '0' }, 1500);
            // $('#serviciosItem').addClass('servicioItemAppear');
         }, 2100);
         
    });
    
    //close menu
    $('#exitMenu').click(function(){
        $('#menu').css('display', 'none');
        $( ".menuText" ).stop();
        $('#serviciosItem').css('margin-top', '10%');
        $('#portfolioItem').css('margin-top', '15%');
        $('#contactoItem').css('margin-top', '20%');
        $('#nosotrosItem').css('margin-top', '25%');
        $('#menu').removeClass('menuAppear');
        $('.menuText').css('display', 'none');
    });
    

    $('.menuText').mouseover(function () {
        $(this).find('path').attr('fill', 'white');
    });

    $('.menuText').mouseout(function () {
        $(this).find('path').attr('fill', 'none');
    });

});