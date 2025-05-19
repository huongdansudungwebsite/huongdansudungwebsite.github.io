const sidebar = {
	slide :{
		'text': 'Slide',
		'href': '#slide',
	}
}


$(document).ready(function(){
	$.each(sidebar, function(index, item){
		$('.sidebar ul').append('<li><a href="'+item.href+'">'+item.text+'</a></li>')
	})
})