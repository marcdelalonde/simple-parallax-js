jQuery(document).ready(function(){
	
	jQuery('[data-type="background"]').each(function()
    {
        var bgobj = jQuery(this); // assigning the object
        var offset = bgobj.offset();
        var distance2top = offset.top;

        var defautPos = bgobj.css('background-position');
        defautPos = defautPos.split(" ");
        var defautPosY = parseFloat(defautPos[1]);
     
        jQuery(window).scroll(function() 
        {
        	//if (jQuery(window).scrollTop() >= distance2top)
        	//{
	        	//var yPos = - ( (jQuery(window).scrollTop() - distance2top) / bgobj.data('speed') );
	        	var yPos = defautPosY - (jQuery(window).scrollTop()/bgobj.data('speed'));
	        	
	        	// Put together our final background position
	        	var coords = yPos + 'px'; //alert(coords);
	        	// Move the background
	        	bgobj.css({backgroundPositionY: coords});
        	//}
        }); 
    });

});