const sidebar = {
	home :{
		'text': 'Home',
		'href': '/',
	},
	setting :{
		'text': 'Cài đặt chung',
		'href': '#setting',
	},
	post :{
		'text': 'Bài viết',
		'href': '#post',
	},
	page :{
		'text': 'Trang',
		'href': '#page',
	},
	product :{
		'text': 'Sản phẩm',
		'href': '#product',
	},
	slide :{
		'text': 'Slide',
		'href': '#slide',
	},
	navigation :{
		'text': 'Điều hướng',
		'href': '#navigation',
	},
	user :{
		'text': 'User',
		'href': '#user',
	},
}


$(document).ready(function(){
	$.each(sidebar, function(index, item){
		$('.sidebar ul').append('<li><a href="'+item.href+'"><span>'+item.text+'</span></a></li>')
	})
})
