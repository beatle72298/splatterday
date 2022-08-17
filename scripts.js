
$(document).ready(function(){    
let link = $("#comp-l6w88giv > p > span > a").attr("href");
console.log(link);

setTimeout(function(){
    let chessBtn = $("._3Xz9Z").contents().find("#chess-btn");   
    let onClick = "popup({url:'"+link+"',title: 'Chess',w:1025,h:560,left:690}"

    chessBtn.attr("onclick",onClick);
    console.log(chessBtn); 
}, 2000);

 

//$("._3Xz9Z").on('load', function(){
//let chessBtn = $("._3Xz9Z").contents().find("#chess-btn");   
//let onClick = "popup({url:'"+link+"',title: 'Chess',w:1025,h:560,left:690}"
//    
//chessBtn.attr("onclick",onClick);
//console.log(chessBtn);     
//});
});
