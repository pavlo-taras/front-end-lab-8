$(window).load(function(){
    $('.flexslider').flexslider({
      animation: "fade"
    });
});  

$(window).load(function(){
    $(document).on('submit','.form',function(){
    	if( $('.form #name').val().length < 6) {
    		alert('Name must contain at least 6 characters');
    		return false;
    	}
    });
});

$(window).load(function(){
    var maxHeight = 0;
    for( var i=0; i < $('.category-unit').length; i++) {
        if ($('.category-unit').eq(i).height() > maxHeight) {
            maxHeight = $('.category-unit').eq(i).height()
        }
    }
    for( var i=0; i < $('.category-unit').length; i++) {
        $('.category-unit').eq(i).css('height', maxHeight);
    }
});
