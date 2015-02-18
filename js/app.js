$(document).ready(fuction () {
	// Click button to add item

	$('#add').click(function() {
		if( $('input#textbox').val().length == 0 ) {
				alert("empty value");
				$('#error').show();
				$('input#textbox').val(" ");
		} else {

		$('ul').prepend('<li class="double"><div class="box"></div><i class="fa fa-trash-o"></i>' + $('input#textbox').val() + '</li>');
		$('input#textbox').val(" ");
		$('#error').hide();

		};
	)};

	//Click box to cross out
		


	//Click trash to delete
		$('#items').on('click','.main li i', function(e){e.preventDefault(); $(this).parent().remove()});
	