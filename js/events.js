function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })}
  
function frameIt() {
  $('img').on("load", function() {
    $(this).css('frame', "solid 2px red");
  });
}


$(document).ready(function(){

// call functions here

});
