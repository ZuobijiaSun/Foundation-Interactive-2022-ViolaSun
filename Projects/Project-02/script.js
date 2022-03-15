$(function(){
	$('.alphabet div').click(function() {
		var alphabet = $(this).text();
		$('#geometrics-fonts').attr('class', 'letter_' + (alphabet));
	});
});