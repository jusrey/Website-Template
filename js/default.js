//Javascript Action

$(window).load ( function() {
	
	//Handles focuses on input elements
	$('input').focusin( function () { $(this).removeClass("pre"); if( curVal.substr(0, 3) == "Ex:") { $(this).val("");} } );
	
	//Handles required form elements
	$('.req').focusout( function () { 
		if ($(this).val() == null || $(this).val() == "") { 
			$(this).addClass("fail"); 
			$(this).removeClass("pass");  
		} 
		else { 
			$(this).addClass("pass"); 
			$(this).removeClass("fail");  
		} 
	});
	
	//Handles required email form elements
	$('.req.email').focusout( function () { 
		$(this).removeClass("pass");
		$(this).removeClass("fail");    
		if ($(this).val() == null || $(this).val() == "") { 
			$(this).addClass("fail"); 
		} 
		else { 
			$(this).addClass("pass"); 
		} 
	});
		
});