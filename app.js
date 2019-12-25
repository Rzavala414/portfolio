$(document).ready(function(){

  $('.menu-toggler').on('click', function(){
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
  })
  
  $('.top-nav .nav-link').on('click', function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function() {
      $('html, body').animate(
          {scrollTop: $($(this).attr('href')).offset().top - 100}, 
         2000);
  });

  $('#up').on('click', function () {
      $('html, body').animate( 
          {scrollTop: 0}, 
         2000);
  });

  AOS.init({
      easing: 'ease',
      duration: 1500,
      once: true
  })

  $(".submit").on("click", function (event) {
        event.preventDefault();

        let name = $('#name').val();
        let email = $('#email').val();
        let services = $('#services').val();  
        let message = $('#subject').val();

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is Valid</div>')
        } else{
            event.preventDefault();   
            statusElm.append('<div>Email is Invalid</div>')  
        }
        
        if(subject.length > 2){
            statusElm.append('<div>Email is Invalid</div>');   
        } else{
            event.preventDefault();   
            statusElm.append('<div>Email is Invalid</div>');   
        }
        
        if(message.length >= 10){
            statusElm.append('<div>Message is</div>');   
        } else{
            event.preventDefault();   
            statusElm.append('<div>Message length too short</div>');   
        }
    });

});