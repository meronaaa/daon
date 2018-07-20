$(document).ready(function(){
  var chk = true;
  $(window).on("scroll",function(){
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos, chk);
    if ((scrollPos > 500) && (chk == true)) {
      aniNum();
      chk = false;
    }
  })
})


function aniNum() {
    $('#count1').delay(200).animateNumber({number:17,'opacity':'1'},1100,'linear');
    $('#count2').delay(1100).animateNumber({number:840,'opacity':'1'},1200);
    $('#count3').delay(2300).animateNumber({number:2100,'opacity':'1'},1200);
}
