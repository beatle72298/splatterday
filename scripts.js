
$(document).ready(function(){    
//let link = $("#comp-l6w88giv > p > span > a").attr("href");
//console.log(link);
//
//setTimeout(function(){
//    let chessBtn = $("._3Xz9Z").contents().find("#chess-btn");   
//    let onClick = "popup({url:'"+link+"',title: 'Chess',w:1025,h:560,left:690}"
//
//    chessBtn.attr("onclick",onClick);
//    console.log(chessBtn); 
//}, 2000);

function changeBtn(x) {
  if (x.matches) { // If media query matches
    $('#splatterday-btn').attr("href","https://theknightschool.com/splatterday");
    $("#splatterday-btn").attr("onClick","");
  } else {
      $('#splatterday-btn').attr("href","");
      $("#splatterday-btn").attr("onClick","javascript:window.close('','_parent','');");
  }
}

var x = window.matchMedia("(max-width: 500px)")
changeBtn(x) // Call listener function at run time
x.addListener(changeBtn) // Attach listener function on state changes

//$("._3Xz9Z").on('load', function(){
//let chessBtn = $("._3Xz9Z").contents().find("#chess-btn");   
//let onClick = "popup({url:'"+link+"',title: 'Chess',w:1025,h:560,left:690}"
//    
//chessBtn.attr("onclick",onClick);
//console.log(chessBtn);     
//});
});
