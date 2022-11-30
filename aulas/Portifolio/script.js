$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //click menu mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleCklass("active");
    })
});