$(document).ready(function(){
  $('.home-sidebar-image').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    nextArrow: '<div class="home-sidebar-control__prev"><button class="home-sidebar-control__prev--image"><img src="./images/prev.png" alt=""></button></div>',
    prevArrow: '<div class="home-sidebar-control__next"><button class="home-sidebar-control__next--image"><img src="./images/next.png" alt=""></button></div>',
  });

  $('.mobile-slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    dots: true,
    nextArrow: false,
    prevArrow: false,
  });
  $('.mobile-slider-top').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
    nextArrow: false,
    prevArrow: false,
  });
  $('.mobile-slider-between').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    nextArrow: false,
    prevArrow: false,
  });
  $('.mobile-slider-bottom').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    nextArrow: false,
    prevArrow: false,
  });

  $('.home-store-list a').click(function() {

    $('.home-store-list .home-store-list__item ').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });

  $('.content-webstore-list a').click(function() {

    $('.content-webstore-list .content-webstore-list__item ').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });
  $('.content-knowledge-outside__left--list a').click(function() {

    $('.content-knowledge-outside__left--list .content-knowledge-outside__left--list-item ').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });

  $('.pc-slider-top').slick({
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

  $('.pc-slider-between').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: false,
      prevArrow: false,
  });

  $('.pc-slider-bottom').slick({
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

  $('.pc-slider-team').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
  });

  $(".request-btn").click(function(event){
    $(".modal-request").addClass("visible");
  });
  
  $(".modal-request-container__close").click(function(){
    $(".modal-request").removeClass("visible");
  });
  
  $(".modal-request").click(function() {
    $(".modal-request").removeClass("visible");
  });
  $(".modal-request-container").click(function(event) {
    event.stopPropagation();
  });

  var mybutton = $("#myBtn");
  var offSetTop = 100;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offSetTop)  {
        mybutton.css("display","block");
    } else {
        mybutton.css("display","none");
    }
  });
  mybutton.click(function() {
    $(window).scrollTop({
      top: 0,
      behavior: "smooth",
    })
  })

  $('.js-moblie-navbar').click(function() { 
    $('.js-mobile-menu').toggleClass('show'); 
    $('.mobile-menu-overlay').toggleClass('show');  
    if($('.js-mobile-menu').hasClass('show') === true) {
      $('.navbar-mobile').css("color", "#000")
    } else { 
      $('.navbar-mobile').css("color", "#fff")
    }
  })
  $(".mobile-menu-overlay").click(function() {
    $('.js-mobile-menu').addClass('show'); 
    $('.mobile-menu-overlay').toggleClass('show');
    if($('.js-mobile-menu').hasClass('show') === true) {
      $('.navbar-mobile').css("color", "#000")
    } else { 
      $('.navbar-mobile').css("color", "#fff")
    } 
  });

  $('.wrapper-mobile-main__button').click(function () { 
    this.children.item(0).classList.toggle('fa-times');
    this.classList.toggle('open');
  });



  let el = $('.header-outside-language');
  let cur = el.find('.header-outside-language__current');
  let options = el.find('.header-outside-language__options li');

  // Open language dropdown panel
  el.click(function(e) {
    el.toggleClass('show-options');
    
    setTimeout(function() {
      el.toggleClass('anim-options');
    }, 50);
    
    setTimeout(function() {
      el.toggleClass('show-shadow');
    }, 200);
  });
  // Close language dropdown panel
  options.click(function(e) {
    e.stopPropagation();
    el.removeClass('anim-options');
    el.removeClass('show-shadow');
    
    let newLang = $(this).data('lang');
    cur.find('span').text(newLang);
    
    options.removeClass('selected');
    $(this).addClass('selected');
    
    setTimeout(function() {
      el.removeClass('show-options');
    }, 600);
  });

})

  