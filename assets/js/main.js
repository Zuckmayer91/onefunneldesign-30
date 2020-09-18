$(document).ready(function() {
    $(window).scroll(function(){
            if(document.body.scrollTop > 300)
                    $('.navbar').fadeIn( "slow", function() { });
            else    
                    $('.navbar').fadeOut( "slow", function() { });
    });

    $('a#srolltotop').click(function(){
            $('html, body').animate({scrollTop:0}, 100);
            return false;
    });
});