// JavaScript Document
setTimeout(function(){   
    
	$("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    }); 
	}, 300);


$(document).ready(function () {
                try{
                $('#example1').datepicker({
                    format: "dd/mm/yyyy"
                });  
                }catch(e){
                }
            
});	
			
					