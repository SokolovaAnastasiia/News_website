$(function(){
	var checkClick = true;

	$('#burger').click(
		function(){

			if(checkClick){
				var burgerBack = $('<div class="burger-back"></div>');

				$('html, body').addClass('stop-scrolling');

				$('header').after(burgerBack);

				$('.burger-back').append($('<ul><li class="menu-parts">Главная</li></ul>'));
				$('.burger-back ul').append($('<li class="menu-parts">Политика</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">Общество</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">Экономика</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">В мире</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">Проишествия</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">Спорт</li>'));
				$('.burger-back ul').append($('<li class="menu-parts">Наука</li>'));
				$('.burger-back ul').append($('<li class="menu-parts" style="border: 0">Туризм</li>'));

				$('#burger').attr("src","img/cross.jpg");
				
				checkClick = false;
			}
			else{
				$('html, body').removeClass('stop-scrolling');
				$('.burger-back').remove();

				$('#burger').attr("src","img/adapt/burger.jpg");
				checkClick = true;
			}



			

		}
	);

});
