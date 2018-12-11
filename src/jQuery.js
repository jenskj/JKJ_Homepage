import $ from 'jquery'; 

$(document).ready(function() {

 // Sticky Navbar

 $(window).on('scroll', () => stickyNav())

 const $navbar = $("#navbar");
 var sticky = $navbar.offset().top;
 
 function stickyNav() {
   if (window.pageYOffset >= sticky) {
     $navbar.css('position', '');
     $navbar.addClass("sticky")
   } else {
     $navbar.css({'position' : 'relative', 'bottom' : 0});
     $navbar.removeClass("sticky")
   }
 }
 
 // Grid
   $('.box').on('click', (e) => {
      
     $('.box').toggle()
     $(e.currentTarget).toggle()
     $(e.currentTarget).toggleClass('expand')
     $('.grid').toggleClass('block')
 
     if ($(e.currentTarget).hasClass('expand')) {
       setTimeout(() => {
         $(e.currentTarget).find('.viewDiv').fadeIn(500)
       }, 500);
 } else {
       $(e.currentTarget).find('.viewDiv').hide();
 }
 })
 
 // ViewProject button will expand on hover and show the Codepen logo
 $('.viewProject').hover((e) => {
   $(e.currentTarget).one('transitionend webkitTransitionEnd oTransitionEnd', function () {
     if ($(e.currentTarget).css('padding-bottom') === '35px')
 {
   $('.viewProject').parents().find('.viewDiv svg').fadeIn(500)
 }
 });
 }, () => {
   $('.viewDiv svg').clearQueue().fadeOut(100)
 })
 
 
 // Navbar scroll to position
 $("#navbar a").click(function(e) {
     e.preventDefault();
     let $anchor = $(this);
     $('html, body').stop().animate({
       scrollTop: $('#' + $anchor.attr('href')).offset().top
     }, 1000);
 });
 
 // Skillbar animation when fully in viewport  
 
   $.fn.isFullyInViewport = function() {
   var elementTop = $(this).offset().top;
   var elementBottom = elementTop + $(this).outerHeight();
 
   var viewportTop = $(window).scrollTop();
   var viewportBottom = viewportTop + $(window).height();
 
   return elementTop >= viewportTop && elementBottom <= viewportBottom;
 };
 
 $(window).on('resize scroll', function() {
   
   $('.skillbar').each(function(){
     if ($(this).isFullyInViewport()) {
     $(this).find('.skillbar-bar').animate({
       width:$(this).attr('data-percent')
     },1000);
   }
   });
 });     
})