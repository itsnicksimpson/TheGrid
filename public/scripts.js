(function($) {

	$('.container').on('click', function() {
		$(this).append('<input type="checkbox" name="checkbox" id="checkbox_id" value="value"><input type="text" class="todo-input">');
	});

	$('.todo-input').keyup(function (e) {
		if (e.keyCode == 13){

console.log('it works');
		}
	});
})(jQuery);
