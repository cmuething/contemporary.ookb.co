// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll_to").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 888);
});

/****************************/
/****************************/
// logo craziness!
/****************************/
/****************************/

$('#logo img').hide()
$('#logo img:nth-child(odd)').show();

$(window).scroll(function() {

  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  var r  = (dh-wh)/12;

  if (s<r) {
    $('#logo img:nth-child(even)').fadeOut();
    $('#logo img:nth-child(odd)').fadein();
  }

  if ((s>r) && (s<=(2*r))) {
    $('#logo img:nth-child(1)').fadeOut();
    $('#logo img:nth-child(15)').fadeOut();
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(15)').fadeOut();
    $('#logo img:nth-child(2)').fadeIn();
    $('#logo img:nth-child(14)').fadeIn();
  }

  if ((s>(2*r)) && (s<=(3*r))) {
    $('#logo img:nth-child(2)').fadeOut();
    $('#logo img:nth-child(14)').fadeOut();
    $('#logo img:nth-child(4)').fadeOut();
    $('#logo img:nth-child(16)').fadeOut();
    $('#logo img:nth-child(3)').fadeIn();
    $('#logo img:nth-child(15)').fadeIn();
  }

  if ((s>(3*r)) && (s<=(4*r))) {
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(13)').fadeOut();
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(17)').fadeOut();
    $('#logo img:nth-child(4)').fadeIn();
    $('#logo img:nth-child(16)').fadeIn();
  }

  if ((s>(4*r)) && (s<=(5*r))) {
    $('#logo img:nth-child(4)').fadeOut();
    $('#logo img:nth-child(16)').fadeOut();
    $('#logo img:nth-child(6)').fadeOut();
    $('#logo img:nth-child(18)').fadeOut();
    $('#logo img:nth-child(5)').fadeIn();
    $('#logo img:nth-child(17)').fadeIn();
  }

  if ((s>(5*r)) && (s<=(6*r))) {
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(17)').fadeOut();
    $('#logo img:nth-child(7)').fadeOut();
    $('#logo img:nth-child(19)').fadeOut();
    $('#logo img:nth-child(6)').fadeIn();
    $('#logo img:nth-child(18)').fadeIn();
  }

  if ((s>(6*r)) && (s<=(7*r))) {
    $('#logo img:nth-child(6)').fadeOut();
    $('#logo img:nth-child(18)').fadeOut();
    $('#logo img:nth-child(8)').fadeOut();
    $('#logo img:nth-child(20)').fadeOut();
    $('#logo img:nth-child(7)').fadeIn();
    $('#logo img:nth-child(19)').fadeIn();
  }

  if ((s>(7*r)) && (s<=(8*r))) {
    $('#logo img:nth-child(7)').fadeOut();
    $('#logo img:nth-child(19)').fadeOut();
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(21)').fadeOut();
    $('#logo img:nth-child(8)').fadeIn();
    $('#logo img:nth-child(20)').fadeIn();
  }

  if ((s>(8*r)) && (s<=(9*r))) {
    $('#logo img:nth-child(8)').fadeOut();
    $('#logo img:nth-child(20)').fadeOut();
    $('#logo img:nth-child(10)').fadeOut();
    $('#logo img:nth-child(22)').fadeOut();
    $('#logo img:nth-child(9)').fadeIn();
    $('#logo img:nth-child(21)').fadeIn();
  }

  if ((s>(9*r)) && (s<=(10*r))) {
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(21)').fadeOut();
    $('#logo img:nth-child(11)').fadeOut();
    $('#logo img:nth-child(23)').fadeOut();
    $('#logo img:nth-child(10)').fadeIn();
    $('#logo img:nth-child(22)').fadeIn();
  }

  if ((s>(10*r)) && (s<=(11*r))) {
    $('#logo img:nth-child(10)').fadeOut();
    $('#logo img:nth-child(12)').fadeOut();
    $('#logo img:nth-child(22)').fadeOut();
    $('#logo img:nth-child(24)').fadeOut();
    $('#logo img:nth-child(11)').fadeIn();
    $('#logo img:nth-child(23)').fadeIn();
  }

  if ((s>(11*r)) && (s<=(12*r))) {
    $('#logo img:nth-child(odd)').fadeOut();
    $('#logo img:nth-child(even)').fadeIn();
  }

});

/****************************/
/****************************/
// /END logo craziness!
/****************************/
/****************************/





$(document).ready(function() {
  // set slideshow height cleverly
  var wh = $(window).height();
  var ww = $(window).width();
  $('#slideshow').height(wh-300);
  $('#white-wrapper').css("margin-top",wh-400);
  $('.home-2 .navbar').hide();
});

$(window).scroll(function() {

  var s  = $(window).scrollTop();
  var wh = $(window).height();

  if ( s >= (wh-293)) { 
    $('.home-2 .navbar').fadeIn('fast');
    }
  else { 
    $('.home-2 .navbar').fadeOut('fast');
    }

});



/** Board Bio stuff **/
$("#board .bio p").hide();
$("#board .bio img").click(function() {
  $(this).parent().find("p").slideToggle(300);
});
$("#board .bio h2").click(function() {
  $(this).parent().find("p").slideToggle(300);
});




/* New Homepage C's Scrolling */
// Scrolling grid magic
$(window).scroll(function(){
  // declaring various variables
  var neg       = 0-1;
  var s         = $(window).scrollTop();
  var wh        = $(window).height();
  var ww        = $(window).width();
  var sweetspot = wh-293;
  var hfp       = (s/sweetspot);
  var hfn       = (s/sweetspot)*neg;
  var imgw      = $('header img').width();
  var ic        = imgw/2

  $('header img:nth-child(1)').css('left',((imgw*6)-ic)*hfp);
  $('header img:nth-child(12)').css('left',((imgw*6)-ic)*hfn);
  $('header img:nth-child(2)').css('left',((imgw*5)-ic)*hfp);
  $('header img:nth-child(11)').css('left',((imgw*5)-ic)*hfn);
  $('header img:nth-child(3)').css('left',((imgw*4)-ic)*hfp);
  $('header img:nth-child(10)').css('left',((imgw*4)-ic)*hfn);
  $('header img:nth-child(4)').css('left',((imgw*3)-ic)*hfp);
  $('header img:nth-child(9)').css('left',((imgw*3)-ic)*hfn);
  $('header img:nth-child(5)').css('left',((imgw*2)-ic)*hfp);
  $('header img:nth-child(8)').css('left',((imgw*2)-ic)*hfn);
  $('header img:nth-child(6)').css('left',((imgw)-ic)*hfp);
  $('header img:nth-child(7)').css('left',((imgw)-ic)*hfn);

  $('header img').css('top',s);

});


