$(document).ready(function () {
   let scrollWidth = 175 * 4;
   let elmMaxWidth = $('#hihi')[0].scrollWidth;
   let scrollPosition = 0;
   console.log($('#hihi')[0].scrollWidth);
   $('#scrollRight').on('click', function () {
      if (scrollPosition === 0) {
         scrollPosition = scrollWidth;
      } else if (scrollPosition < elmMaxWidth) {
         scrollPosition += scrollWidth;
      } else {
         scrollPosition = elmMaxWidth
      }
      $('#hihi').animate({
         scrollLeft: scrollPosition
      })
   });

   $('#scrollLeft').on('click', function () {
      if (scrollPosition <= 0) {
         scrollPosition = 0;
      } else if (scrollPosition <= elmMaxWidth) {
         scrollPosition -= scrollWidth;
      }
      $('#hihi').animate({
         scrollLeft: scrollPosition
      })
   });
});
