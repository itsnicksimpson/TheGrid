(function($) {

	var listItem = $('<div class="todo-item draggable"><input type="checkbox" name="checkbox" id="checkbox_id" value="value"><label></label><input type="text" class="todo-input"></div>');

	$('.container').on('click', function() {
		var el = $(listItem).clone().appendTo('.container');
		el.find('input[type="text"]').keyup(function(e) {
			if (e.keyCode === 13) {
				var text = $(this).val();
				$(this).replaceWith('<span>' + text + '</span>');
			}
		});

		$('.draggable').draggable();
		el.find('label').on('click', function(e) {
			if (el.find('input[type="checkbox"]').prop('checked') === true) {
				el.find('input[type="checkbox"]').prop('checked', false);
			}
			else {
				el.find('input[type="checkbox"]').prop('checked', true);
			}
		});
	});

})(jQuery);
