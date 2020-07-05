$(document).ready(function(){


    var myObject = $("#dGraficoInv");
    var myposition = myObject.offset();
    
    $("#dGrafico").css({  'left' : myposition.left , 'width' : $("#dGraficoInv").css('width') });
    $("#dGrafico").offset({left:myposition.left})
    
    var myObject = $("#socialMediaInv");
    var myposition = myObject.offset();
    
    $("#socialMedia").css({  'left' : myposition.left , 'width' : $("#socialMediaInv").css('width') });
    $("#socialMedia").offset({left:myposition.left})
    
    var myObject = $("#dWebInv");
    var myposition = myObject.offset();
    
    $("#dWeb").css({  'left' : myposition.left , 'width' : $("#dWebInv").css('width') });
    $("#dWeb").offset({left:myposition.left})
    
    var myObject = $("#asesoriaInv");
    var myposition = myObject.offset();
    
    $("#asesoria").css({  'left' : myposition.left , 'width' : $("#asesoriaInv").css('width') });
    $("#asesoria").offset({left:myposition.left})
    




    $('.titleUp').animate({ 'marginTop': '0%' }, 600);
    $('.titleDown').animate({ 'marginTop': '0%' }, 600, function (){
        $('.titleUpInv').css('visibility', 'visible');
        $('.titleUp').css('visibility', 'hidden');
        $('.titleDownInv').css('visibility', 'visible');
        $('.titleDown').css('visibility', 'hidden');
    });
});