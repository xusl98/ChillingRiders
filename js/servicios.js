$(document).ready(function(){
    $('.titleUp').animate({ 'marginTop': '0%' }, 600);
    $('.titleDown').animate({ 'marginTop': '0%' }, 600);
    setTimeout(function(){ 
        // $('.titleUp').css('position', 'relative');
        $('.titleUpInv').css('visibility', 'visible');
        $('.titleUp').css('visibility', 'hidden');
        $('.titleDownInv').css('visibility', 'visible');
        $('.titleDown').css('visibility', 'hidden');
     }, 550);
});