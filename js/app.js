$(document).ready(function(){


    // js code 
    // stiky nav
    $(window).scroll(function(){

        let scroll = $(window).scrollTop();
        if(scroll>1){
            $(".navbar").addClass("navbar-styky");
        }
        else if(scroll==0){
            $(".navbar").removeClass("navbar-styky");
        }
    });

    // hide and show
    $(".navbar-collapse").click(function(){
        $("#navbarSupportedContent").removeClass("show")
    })

   


});