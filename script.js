// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("nav");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-50px";
//   }
// }
       var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

            function submitForm() {
              var name = document.getElementById('name').value;
              var email = document.getElementById('email').value;
              console.log('Name:', name);
              console.log('Email:', email);
            }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let line_box = document.getElementsByClassName("line_box");
  if (n > slide.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  for (i = 0; i < line_box.length; i++) {
    line_box[i].className = line_box[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  line_box[slideIndex-1].className += " active";
}
