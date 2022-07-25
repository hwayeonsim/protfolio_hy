$(document).ready(function () {

  //AOS
  AOS.init();


  // pager
  const intro = $('.intro').offset().top;
  const aboutMe = $('.about-me').offset().top;
  const redesign1 = $('.redesign-1').offset().top;
  const mardiMercredi = $('.mardi-mercredi').offset().top;
  const redesign2 = $('.redesign-2').offset().top;
  const blueBottle = $('.blue-bottle').offset().top;
  const redesign3 = $('.redesign-3').offset().top;
  const diptyque = $('.diptyque').offset().top;
  const outro = $('.outro').offset().top;

  $('.pager-1').click(function () {
    $('html,body').animate({
      scrollTop: intro
    });
  });
  $('.pager-2').click(function () {
    $('html,body').animate({
      scrollTop: aboutMe
    });
  });
  $('.pager-3').click(function () {
    $('html,body').animate({
      scrollTop: redesign1
    });
  });
  $('.pager-4').click(function () {
    $('html,body').animate({
      scrollTop: mardiMercredi
    });
  });
  $('.pager-5').click(function () {
    $('html,body').animate({
      scrollTop: redesign2
    });
  });
  $('.pager-6').click(function () {
    $('html,body').animate({
      scrollTop: blueBottle
    });
  });
  $('.pager-7').click(function () {
    $('html,body').animate({
      scrollTop: redesign3
    });
  });
  $('.pager-8').click(function () {
    $('html,body').animate({
      scrollTop: diptyque
    });
  });
  $('.pager-9').click(function () {
    $('html,body').animate({
      scrollTop: outro
    });
  });

  $(window).scroll(function () {
    var sct = $(window).scrollTop();

    if (sct >= intro && sct < aboutMe) {
      //첫번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(0).addClass('active');
    } else if (sct >= aboutMe && sct < redesign1) {
      //두번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(1).addClass('active');
    } else if (sct >= redesign1 && sct < mardiMercredi) {
      //세번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(2).addClass('active');
    } else if (sct >= mardiMercredi && sct < redesign2) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(3).addClass('active');
    } else if (sct >= redesign2 && sct < blueBottle) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(4).addClass('active');
    } else if (sct >= blueBottle && sct < redesign3) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(5).addClass('active');
    } else if (sct >= redesign3 && sct < diptyque) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(6).addClass('active');
    } else if (sct >= diptyque && sct < outro) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(7).addClass('active');
    } else if (sct >= outro) {
      //네번째 영역
      $('.pager ul li').removeClass('active');
      $('.pager ul li').eq(8).addClass('active');
    }
  });

});