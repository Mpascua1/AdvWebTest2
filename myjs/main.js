$('.login-button').on('click', () => {
 $('.login-form').toggle(); 
});

$(document).ready(() => 
{ 
	//$('.product-card').show();
	//let $navDropdown=$('.nav-menu');
	//$navDropdown.show();
	
	const $menuButton = $('.menu-button');
	const $navDropdown = $('.nav-menu');
	
	$($menuButton).on('click', () => {$navDropdown.show();});
	
	$navDropdown.on('mouseleave', () => {$navDropdown.hide();});

	$('#login').on('click', () => { $loginForm.show(); });
});





