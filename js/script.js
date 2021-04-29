$(function(){
	$('.util-menu').click(function(){
		$('.util-sub').slideToggle();
	})
	$('.family-link').on('click', function(){
		if ($(this).hasClass('on')) {
			$(this).add('.family-list').removeClass('on');
		} else {
			$(this).add('.family-list').addClass('on');
		}
	})
	console.log('로딩완료');
});

//class 메소드
//	.addClass() --> css상에서 미리 만들어 놓은 클래스명을 추가
//	.removeClass() --> 추가된 클래스명을 지우는 메소드
//	.toggleClass() --> add/remove 두가지 동시에 수행
//	.hasClass() --> 지정한 클래스명이 하나라도 있으면 실행(true를 반환)
//		p class = "on active live"