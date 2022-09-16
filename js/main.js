
$(document).ready(function(){
    $('.home-store-list a').click(function() {

      $('.home-store-list .home-store-list__item ').removeClass('active');
      $(this).parent().addClass('active');
  
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tabs-content div').hide();
      $(currentTab).show();
  
      return false;
    });

    $('.content-webstore-list a').click(function() {

      $('.content-webstore-list .content-webstore-list__item ').removeClass('active');
      $(this).parent().addClass('active');
  
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tabs-content div').hide();
      $(currentTab).show();
  
      return false;
    });

    $('.home-projects-top').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: false,
        prevArrow: false,
    });

    $('.home-projects-between').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3500,
      nextArrow: false,
      prevArrow: false,
  });

  $('.home-projects-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
});
  
});
  