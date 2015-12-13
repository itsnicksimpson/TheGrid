(function($) {

	var listItem = $('<input type="checkbox" name="checkbox" id="checkbox_id" value="value"><input type="text" class="todo-input">');

	$('.container').on('click', function() {
		$(listItem).clone()
		.keyup(function(e) {
			if (e.keyCode === 13) {
				var text = $(this).val();
				$(this).replaceWith('<span>' + text + '</span>');
			}
		})
		.appendTo('.container')
		.wrap('<div class="draggable"></div>');
		$('.draggable').draggable();
	});

})(jQuery);
