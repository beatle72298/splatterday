
$(document).ready(function(){    


function changeBtn(x) {
  if (x.matches) { // If media query matches
    $('#splatterday-btn').attr("href","https://theknightschool.com/splatterday");
    $('#splatterday-btn').attr("target","_blank");
    $("#splatterday-btn").attr("onClick","");
  } else {
      $('#splatterday-btn').attr("href","");
      $('#splatterday-btn').attr("target","");
      $("#splatterday-btn").attr("onClick","javascript:window.close('','_parent','');");
  }
}

var x = window.matchMedia("(max-width: 500px)")
changeBtn(x) // Call listener function at run time
x.addListener(changeBtn) // Attach listener function on state changes

});
