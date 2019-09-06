$(function(){
	$('.order-recall').on('click', function(){
		$('#form-container').css('display', 'flex');
	});
	$('#form-container').on('click', function(event){
		/*проверяем, чтобы закрытие формы выполнялось только при нажатии вокруг формы*/
		if(event.target == this) {
			$('#form-container').css('display', 'none');
		}
	});
	$('#recall-form').on('submit', function(){
		/*объект (состоит из ключей и их значений) data, гду name - ключ, а после двоекточия его значение.*/
		let data = {
			'name': $(this).find('#name').val(),
			/*'phone': $(this).find('#phone').val()*/
		};
		/*отправка скрипту*/
		$.post('/api.php', data, function(response){
			if(response == 1) /*проверяем ответ от сервера*/
			{
				$('#recall-form input[type="text"]').val(''); /*очищаем форму*/
				$('#form-container').css('display', 'none'); /*очищаем контейнер*/
			}
		});
		return false; /*чтобы страница не перезагружалась*/
	});
});