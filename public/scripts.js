(function($) {

	var listItem = $('<div class="draggable"><input type="checkbox" name="checkbox" id="checkbox_id" value="value"><input type="text" class="todo-input"></div>');

	$('.container').on('click', function() {
		var el = $(listItem).clone().appendTo('.container');
		el.find('input[type="text"]').keyup(function(e) {
			if (e.keyCode === 13) {
				var text = $(this).val();
				$(this).replaceWith('<span>' + text + '</span>');
			}
		})

		$('.draggable').draggable();
	});

})(jQuery);
