// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

var images = new Array(
  //"images/slidshow/pic1.jpg",
  //"images/slidshow/pic2.jpg",
  //"images/slidshow/pic3.jpg",
  //"images/slidshow/pic4.jpg",
  //"images/slidshow/pic5.jpg"
  // "images/slidshow/administrative block_image.jpg",
  //"images/slidshow/campus_image.jpg",
 // "images/slidshow/campus1_image.jpg",
  "images/slidshow/campus3_image.webp",
  "images/slidshow/campus4_image.webp"
);
var nextimage = 0;
doSlideshow();

function doSlideshow() {
  if (nextimage >= images.length) {
    nextimage = 0;
  }
  $(".bg-banner-two")
    .css("background-image", 'url("' + images[nextimage++] + '")')
    .fadeIn(500, function () {
      setTimeout(doSlideshow, 2000);
    });
}

//for gallery
// $(document).ready(function () {
//   console.log("hi");
//   $("[unique-script-id='w-w-dm-id'] .btn-box").click(function () {
//     $(this).parent().children(".overlay").show();
//   });

//   $("[unique-script-id='w-w-dm-id'] .close").click(function () {
//     $("[unique-script-id='w-w-dm-id'] .overlay").hide();
//   });

//   $("[unique-script-id='w-w-dm-id'] .list").click(function () {
//     const value = $(this).attr("data-filter");
//     if (value == "all") {
//       $("[unique-script-id='w-w-dm-id'] .project-image").show("1000");
//     } else {
//       $("[unique-script-id='w-w-dm-id'] .project-image")
//         .not("." + value)
//         .hide("1000");
//       $("[unique-script-id='w-w-dm-id'] .project-image")
//         .filter("." + value)
//         .show("1000");
//     }
//   });
//   $("[unique-script-id='w-w-dm-id'] .list").click(function () {
//     $(this).addClass("active").siblings().removeClass("active");
//   });
// });
