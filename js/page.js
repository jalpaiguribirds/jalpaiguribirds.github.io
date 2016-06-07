// JavaScript Document
$(document).ready(function(){	
$(".close-image").css("display","none");
$(".search-field").css("cursor","pointer");
$(".search-field").css("background-color","transparent");

$(".search-field").focusin(function(){
	$(".search-field").css("background-image","none");
    $(".search-field").css("border","2px solid #fff");
	$(".search-field").css("background-color","#fff");
    $(".m-glass").removeClass("m-left");
	var width = $(window).width(); 
		if (width <= 767)  {
		 $(".search-field").animate({width: '250px'},function(event){
		 $(".close-image").css("display","inline-block");  
			$(".search-field").css("cursor","text");
		});
		} else{
			$(".vanish").css("display","none");
			$(".search-field").animate({width: '580px'},function(event){
			 $(".close-image").css("display","inline-block");  
				$(".search-field").css("cursor","text");
			});
		}	
})

$(".close-image").click(function(){
	 $(".search-field").val('');
     $(".close-image").css("display","none");
	 $(".m-glass").addClass("m-left");
	 
	 $(".search-field").animate({width: '0'},function(){
   	  $(".vanish").css("display","block");
      $(".search-field").css("border","none");
	  $(".search-field").css("background-color","transparent");
	  $(".search-field").css("background-image",'url("Other-Images/searchicon2.png")'); 
     });
     $(".search-field").css("cursor","pointer");
});

$('[data-toggle="tooltip"]').tooltip(); 
		
$(window).scroll(function(){
		if ($(this).scrollTop() >= 1101) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
//Click event to scroll to top
$('.scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},1000);
	return false;
});
		
		
		
$(window).scroll(function(){
	if ($(this).scrollTop() >= 100) {
		$('.scrollToHelp').fadeIn();
	} else {
		$('.scrollToHelp').fadeOut();
	}
});
		
var latestNews = '<div id="latest-news" class="col-md-2 col-sm-6 col-xs-12 footer-blocks">'+
						 '<p class="header-texts-small lobster">Highlights</p>'+
						   '<div id="news-list">'+
							'<ul>'+
							'<li class="highlight2"><a style="color:#000" href="#"><mark>Latest news about sighting</mark></a></li>'+ 
							'<li class="highlight2"><a style="color:#000" href="#"><mark>Meeting / meet / workshop </mark></a></li>'+
							'</ul>'+
						   '</div>'+
						 '</br></br>'+
						 '<p class="header-texts-small lobster">Rarity Read</p>'+
						 '<a target="_blank" href="Rarity Read.html">'+
						 '<p style="color:#000;text-decoration:none;" class="day highlight2">Hooded Pitta [ <span class="highlight3" style="text-decoration:underline;">Pitta sordida</span> ]</p>'+
						 '<img id="" class="centuro img-circle  shadow" style="border:3px solid #fff;" src="Other-Images/Rarity Read/Pitta_net-transparent.png">'+
						 '</a>'+
					   '</div>';
							   
var literature = ' <div id="literature" class="centuro col-md-4 col-sm-6 col-xs-12 footer-blocks">'+
						'<p class="header-texts-small lobster ">Relevant Literatures & Publications</p>'+
								'<a target="_blank" href="#">'+
								'<p class="publication header-texts-small" style="color:#000;"> The Amur Falcon Story</p>'+
								  '<img  class="img-thumbnail shadow" src="Other-Images/ba20cover.jpg">'+
								'</a>'+
					   '</div>';	
				   				   
							   
$('#site-map').after(latestNews);
$('#latest-news').after(literature);

	
if($(window).width()<400){
	$('#logo').before('<br>');
}	


if($(window).width()<=768){
	 var tripSelectMain = $('.trip-select-main');
	$('.trip-user-main').after(tripSelectMain);
}

$('.pad').on('click', function (event) {
    event.preventDefault();
    $target = $(event.target);  
    window.location=$target.closest('a').prop('href');
});	

$('.list-group-item').one("click", handler1);

function handler1() {
  if($(this).find(".glyphicon-triangle-bottom")){
       $(this).find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
	}
    $(this).one("click", handler2);
}

function handler2() {
   if($(this).find(".glyphicon-triangle-top")){
       $(this).find(".glyphicon-triangle-top").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom").delay(8000).fadeIn();
	}
    $(this).one("click", handler1);
}


});




	
	