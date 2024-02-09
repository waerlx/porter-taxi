
// {/* <script>
// // Get the video
// var video = document.getElementById("myVideo");

// // Get the button
// var btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// function myFunction() {
//     if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.innerHTML = "Play";
//     }
// }
// </script> */}




const images = document.querySelectorAll('.main_img');


window.addEventListener('scroll', () => {
    images.style.right = "-" + (window.scrollX / 1.5) + "px";
})

const smoothLinks = document.querySelectorAll('li>a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// let currentIndex = 0;
//   const slides = document.querySelectorAll('.slide');
//   const totalSlides = slides.length;


//   function showSlide(index) {
//     if (index < 0) {
//       currentIndex = totalSlides - 1;
//     } else if (index >= totalSlides) {
//       currentIndex = 0;
//     } else {
//       currentIndex = index;
//     }

//     const transformValue = -currentIndex * 30 + '%';
//     document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
//   }

//   function prevSlide() {
//     showSlide(currentIndex - 1);
//   }

//   function nextSlide() {
//     showSlide(currentIndex + 1);
//   }

// $(window).resize(function() {
//     var window_width = $(window).width();
//     if (window_width < 600) {
//         ('.your-class').slick({
//             dots: true,
//             slidesToShow:3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//         });
//     } else {
//         ('.your-class').slick({
//             dots: true,
//             slidesToShow:3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//         });
//     };
//   });
// $('.your-class').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveWidth: true,
//     autoplay: true,
//     autoplaySpeed: 2000,

//   });
  $('.your-class').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 2000,
    //     }
    //   }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  

// $('.your-class').slick({
//     dots: true,
//     slidesToShow:3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });
// $('.your-class').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 6,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 6000,
//         settings: "unslick"
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       }
//     ]
//   });