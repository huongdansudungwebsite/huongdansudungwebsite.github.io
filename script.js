$(document).ready(function() {
	var hash = window.location.hash;
	console.log(hash)
	if(hash == ''){
		init_page('/')
	}
	else{
		init_page(hash)
	}

	$('.bars, .close, .blur-layer').click(function(){
		$('html').toggleClass('menu-active')
	})

	

})

$('body').on('click', '.sidebar a', function(e) {
	e.preventDefault()
	var href = $(this).attr('href')
	console.log(href)
	init_page(href)
})

function init_page(href){
	$('.sidebar a').removeClass('active')
	if (href.length > 0) {
		if(href=='/'){
		//index page
			get_content('index_page')
			$('a[href="/"]').addClass('active')
			history.pushState('', "", '/');
		}
		else{
			var hash_string = href.substring(1);
			get_content(hash_string)
			history.pushState('', "", href);
		}

	}
}
function get_content(page){
	$.get('./pages/'+page+'.html').done(function(content) {
		$(".content").html(content)
		$("a[href='#"+page+"']").addClass('active')
	}).fail(function() {
		// $(".content").html('').prepend('<div class="alert alert-warning">Trang không tồn tại</div>')
		get_content('not_found')
	})
	$('html').removeClass('menu-active')
}

