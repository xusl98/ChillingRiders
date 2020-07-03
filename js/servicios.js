$(document).ready(function(){
    $('.titleUp').animate({ 'marginTop': '0%' }, 600);
    $('.titleDown').animate({ 'marginTop': '0%' }, 600, function (){
        $('.titleUpInv').css('visibility', 'visible');
        $('.titleUp').css('visibility', 'hidden');
        $('.titleDownInv').css('visibility', 'visible');
        $('.titleDown').css('visibility', 'hidden');
    });
});