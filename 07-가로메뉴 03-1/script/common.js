$(document).ready(function(){
    $('.menu> ul > li').mouseover(function(){
        $('.menu > ul > li > ul').stop().slideDown();
    });

    $('.menu> ul > li').mouseout(function(){
        $('.menu > ul > li > ul').stop().slideUp();
    });
});