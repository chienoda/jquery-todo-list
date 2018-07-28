// Check off specific todos by clicking
$('li').click(function() {
	// if li is gray
	// 	turn it black
	// else
	// 	turn it gray
	// if($(this).css('color') === 'rgb(128, 128, 128)'){
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'Line-through'
	// });
	// }

	$(this).toggleClass('completed');
});

//Click on X to delete todo
$('span').click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

