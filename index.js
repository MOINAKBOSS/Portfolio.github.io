$(document).ready(function(){
    $(".hamburger").click(function(){
        $("#header .nav-list ul").toggleClass('active');
    })
    $(".nav-bar .nav-list ul li").click(function(){
        $("#header .nav-list ul").toggleClass('active');
    })
})
