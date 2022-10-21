let slideNumber = 0;

setInterval(bgChange,5000)

function bgChange(){
  slideNumber ++;
  if(slideNumber > 2) {
    slideNumber = 0;
  }
  $('.bg div').removeClass('show');
  $('.bg div').eq(slideNumber).addClass('show');
  $('.slideCircle div').removeClass('show');
  $('.slideCircle div').eq(slideNumber).addClass('show');
};