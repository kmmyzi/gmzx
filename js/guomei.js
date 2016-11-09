$(document).ready(function(){
  // 1楼轮播
  var now=0;
  var t = setInterval(move, 2000);
  function play(n){
     $(".imgs1").fadeIn(200).sibling("img").fadeOut(200);
  }
  function move(){ 
      now++;
      if(now==$(".imgs1").length){
      	now=0;
      };
      show(now);


  }









})