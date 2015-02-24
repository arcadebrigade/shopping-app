$(document).ready(function () {
	// Click button to add item

	$('#add').click(function() {
		if( $('input#textbox').val().length == 0 ) {
				$('input#textbox').attr("placeholder", "You need to enter some text");
				$('input#textbox').addClass("error");
				$('input#textbox').val("");
		} else {
			$('#items').prepend('<li class="double"><div class="box"></div><i class="fa fa-trash-o"></i>' + $('input#textbox').val() + '</li>');
			$('input#textbox').val("");
			$('input#textbox').removeClass("error");
			$('input#textbox').attr("placeholder", "");
		};
	});

	//Click box to cross out
		$('.box').on('click', function(){
			$(this).toggleClass('fa-check'); 
			$(this).next('').toggleClass('strike');
		});	


	//Click trash to delete
		$('#items').on('click','.fa-trash-o', function(e){e.preventDefault(); $(this).parent().remove()
	});
});