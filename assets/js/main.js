// check off specific todos by clicking
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
