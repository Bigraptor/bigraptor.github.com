$(document).ready(
    function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>0){
                $('header').addClass('slide');
            } else{
                $('header').removeClass('slide'); 
            }
        });
    }
);