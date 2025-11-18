
$("#btn").on("click", function(){
  $('#navbar').slideToggle('fast');
  $('.nav-icon').toggleClass('nav-icon-active');
})

$(".Link").on("click", function(){
  $('#navbar').slideToggle('fast');
  $('.nav-icon').toggleClass('nav-icon-active');
})





let accordion = document.getElementsByClassName("lecture");
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
          this.classList.toggle("active3");
        });
      }

$(window).on('load', function() {
  $('.load-wrapper').fadeOut("slow");
});

