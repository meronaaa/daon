$(document).ready(function() {

  var rightCont = $('.sec_cont01_img');
  var leftCont = $('.sec_cont01');

  slideHeight(); //슬라이드 innerHeight 높이 지정
  swing(); //마우스 이미지 스윙
  show_detail(); //sec02 자세히보기
  glass(); //슬라이드영역 MORE 반짝이는 효과
  cont_img(); //컨텐츠 이미지 슬라이드

  $('.slide_area').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1100,
    pauseOnHover: false,
    dots: true,
    arrows: false,
    // vertical : true,
    // verticalSwiping : true
  })

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);
    if (scrollPos > 380) {
      appearTxt();
    }
    if (scrollPos > 760) {
      $('.sec_cont02_wrap').stop().animate({
        'opacity': '1'
      }, 400);
    } else if (scrollPos < 600) {
      $('.sec_cont02_wrap').stop().animate({
        'opacity': '0'
      }, 200);
    }
    if (scrollPos > 1390) {
      $('.sec03_txt').stop().animate({
        'top': '140px'
      }, 800);
    } else if (scrollPos < 1200) {
      $('.sec03_txt').stop().animate({
        'top': '480px'
      }, 800);
    }
    // else if (scrollPos < 180) {
    //   disappearTxt();
    // }
  })
})

$(window).resize(function() {
  slideHeight();
})


function slideHeight() {
  var innerH = window.innerHeight;
  var innerHimportant = innerH + 'px !important'
  $('.slide_cont').css({
    'height': innerH
  })
}

function swing() {
  $('.scroll').animate({
    'bottom': '15px'
  }, 400).animate({
    'bottom': '23px'
  }, 400, swing);
}

function appearTxt() {
  var rightCont = $('.sec_cont01_img');
  var leftCont = $('.sec_cont01');
  rightCont.animate({
    'opacity': '1',
    'right': '0'
  }, 1000)
  leftCont.animate({
    'opacity': '1',
    'left': '0'
  }, 1000)

}

function disappearTxt() {
  var rightCont = $('.sec_cont01_img');
  var leftCont = $('.sec_cont01');
  rightCont.animate({
    'opacity': '0',
    'right': '-550px'
  }, 550)
  leftCont.animate({
    'opacity': '0',
    'left': '-500px'
  }, 550)
}

function show_detail() {
  $('.show_detail').mouseenter(function() {
    $('.hidden_box').stop().fadeIn(100).stop().animate({
      'top': '-1px',
      'left': '-1px',
      'opacity': '0.6'
    }, 200);
  })
  $('.show_detail').mouseleave(function() {
    $('.hidden_box').stop().fadeOut(300).stop().animate({
      'top': '-1px',
      'left': '-210px',
      'opacity': '0'
    }, 200);
  })
}

function glass() {
  $('.more').mouseenter(function() {
    $('.glass').stop().animate({
      'bottom': '0'
    }, 300);
  })
  $('.more').mouseleave(function() {
    $('.glass').stop().animate({
      'bottom': '-60px'
    }, 300);
  })
}

function cont_img() {
  var mlValue = 1162;
  8
  $('.img_area > ul').animate({
    'margin-left': 0,
    'opacity': 1
  })
  $('.cont01').css({
    'display': 'block'
  });
  var clk = 0;
  setInterval(function() {
    clk++;
    console.log(clk);
    if (clk == 0) {
      $('.cont02_desc').fadeOut(550);
      $('.desc01').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': 0,
        'opacity': '1'
      }, 500)
    } else if (clk == 1) {
      $('.cont02_desc').fadeOut(550);
      $('.desc02').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-1162px',
        'opacity': '1'
      }, 500)
    } else if (clk <= 2) {
      $('.cont02_desc').fadeOut(550);
      $('.desc03').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-2324px'
      }, 500)
      clk = -1;
    }
  }, 8000);
  $('.next').click(function test() {
    clk++;
    console.log(clk);
    if (clk == 0) {
      $('.cont02_desc').fadeOut(550);
      $('.desc01').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': 0,
        'opacity': '1'
      }, 500)
    } else if (clk == 1) {
      $('.cont02_desc').fadeOut(550);
      $('.desc02').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-1162px',
        'opacity': '1'
      }, 500)
    } else if (clk <= 2) {
      $('.cont02_desc').fadeOut(550);
      $('.desc03').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-2324px'
      }, 500)
      clk = -1;
    }
  })
  $('.prev').click(function() {
    clk--;
    console.log(clk);
    if (clk == 0) {
      $('.cont02_desc').fadeOut(550);
      $('.desc01').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': 0
      }, 500)
    } else if (clk == -1) {
      $('.cont02_desc').fadeOut(550);
      $('.desc03').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-2324px'
      }, 500)
    } else if (clk == -2) {
      $('.cont02_desc').fadeOut(550);
      $('.desc02').fadeIn(550);
      $('.img_area > ul').delay(400).animate({
        'margin-left': '-1162px'
      }, 500)
      clk = 1;
    }
  })
}
