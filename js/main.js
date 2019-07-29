var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

$(document).ready(function(){
  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.block-nav').toggleClass('is-open')
  })
})