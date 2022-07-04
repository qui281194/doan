var app = angular.module('myApp',['ngRoute']);
  app.config(function($routeProvider)  {
      $routeProvider
      .when("/", { templateUrl  :  "home.html"
      })
      .when("/seven",  { templateUrl  :  "seven.html"
      })
      .when("/gallery",  { templateUrl  :  "gallery.html"
      })
      .when("/about",  { templateUrl  :  "about.html"
      })
      .when("/feedback",  { templateUrl  :  "feedback.html"
      })
      .when("/contact",  { templateUrl  :  "contact.html"
      });
  });
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })
})
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "quicao902@gmail.com",
        Password : "Anhqui123",
        To : "quicao903434@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br> Phone no: " + document.getElementById("phone").value
              + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message sent succesfully")
    );
}
// var btnSearch = document.querySelector('.search-box__btn');
// btnSearch.addEventListener('click', function(){
//     this.parentElement.classList.toggle('open');
//     this.previousElementSibling.focus()
// })