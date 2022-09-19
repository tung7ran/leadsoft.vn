
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

  $('.consulting-team-outside__list').slick({
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
})

  