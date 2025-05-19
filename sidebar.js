const sidebar = {
	home :{
		'text': 'Home',
		'href': '/',
	},
	post :{
		'text': 'Bài viết',
		'href': '#post',
	},
	slide :{
		'text': 'Slide',
		'href': '#slide',
	}
}


$(document).ready(function(){
	$.each(sidebar, function(index, item){
		$('.sidebar ul').append('<li><a href="'+item.href+'"><span>'+item.text+'</span></a></li>')
	})
})
