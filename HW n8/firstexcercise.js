$(document).ready(function () {
   $("#myBtn").click(function () {
      let input = $("#myInput").val();
      $('h1').text(`Hello there ${input}`)

   });
});