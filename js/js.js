window.onload=function(){
  // 一楼轮播
	   var ban1=$(".imgs1");
	   var yuan22=$("span",$(".lisbox1")[0]);
	   var banbox=$(".main-banner")[0];
	   var btnr=$(".btnr1")[0];
	   var btnl=$(".btnl1")[0];
	   ban1[0].style.zIndex=10;
	   yuan22[0].style.background="#B61B1F";
	   var n=0;
	   var t=setInterval(move,3000);
	   banbox.onmouseover=function(){
	   	     clearInterval(t);
	   	     btnl.style.display="block";
              btnr.style.display="block";
	   }
	   banbox.onmouseout=function(){
	   	   t=setInterval(move,3000);
	   	   btnl.style.display="none";
        btnr.style.display="none";
	   }
     btnr.onclick=function(){
       move();
     }
     btnl.onclick=function(){
      n--;
      if (n<0) {
        n=ban1.length-1
      };
      for (var i = 0; i < ban1.length; i++) {
        animate(ban1[i],{opacity:0},500)
        yuan22[i].style.background="#3E3E3E"
      };
      animate(ban1[n],{opacity:1},500);
      yuan22[n].style.background="#B61B1F";
     }
     function move(){
      n++;
      if (n==ban1.length) {
        n=0;
      };
      for (var i = 0; i < ban1.length; i++) {
        animate(ban1[i],{opacity:0},500)
        yuan22[i].style.background="#3E3E3E"
      };
      animate(ban1[n],{opacity:1},500);
      yuan22[n].style.background="#B61B1F";
     }
	 for(var i=0;i<yuan22.length;i++){
    yuan22[i].index=i;
    yuan22[i].onmouseover=function(){
    for(var i=0;i<ban1.length;i++){
        animate(ban1[i],{opacity:0},500)
         yuan22[i].style.background="#3E3E3E"
        }
        animate(ban1[this.index],{opacity:1},500);
        yuan22[this.index].style.background="#B61B1F";
        n=this.index
    }   
  }

  //二楼轮播 
     var ban2=$(".imgs2");
     var span2=$("span",$(".lisbox2")[0]);
     var banner2=$(".main-banner2")[0];
     var btnr2=$(".btnr2")[0];
     var btnl2=$(".btnl2")[0];
     ban2[0].style.zIndex=10;
     span2[0].style.background="#B61B1F";
     var n2=0;
     var t2=setInterval(move2,3000);
     banner2.onmouseover=function(){
           clearInterval(t2);
           btnl2.style.display="block";
              btnr2.style.display="block";
     }
     banner2.onmouseout=function(){
         t2=setInterval(move2,3000);
         btnl2.style.display="none";
        btnr2.style.display="none";
     }
     btnr2.onclick=function(){
       move2();
     }
     btnl2.onclick=function(){
      n2--;
      if (n2<0) {
        n2=ban2.length-1
      };
      for (var i = 0; i < ban2.length; i++) {
        animate(ban2[i],{opacity:0},500)
        span2[i].style.background="#3E3E3E"
      };
      animate(ban2[n2],{opacity:1},500);
      span2[n2].style.background="#B61B1F";
     }
     function move2(){
      n2++;
      if (n2==ban2.length) {
        n2=0;
      };
      for (var i = 0; i < ban2.length; i++) {
        animate(ban2[i],{opacity:0},500)
        span2[i].style.background="#3E3E3E"
      };
      animate(ban2[n2],{opacity:1},500);
      span2[n2].style.background="#B61B1F";
     }
   for(var i=0;i<span2.length;i++){
    span2[i].index=i;
    span2[i].onmouseover=function(){
    for(var i=0;i<ban2.length;i++){
        animate(ban2[i],{opacity:0},500)
         span2[i].style.background="#3E3E3E"
        }
        animate(ban2[this.index],{opacity:1},500);
        span2[this.index].style.background="#B61B1F";
        n2=this.index
    }   
  } 


  // 选项卡

  var floor=$(".floor")[0];
  var main=$(".main",floor);
  select(floor,main);
  var floor_two=$(".floor-two")[0];
  var main_two=$(".main",floor_two);
  select(floor_two,main_two);
  function select(obj,range){
    var ziti=$(".ziti",obj);
    var item=$(".item",obj);
    item[0].style.background="#535353";
    ziti[0].style.color="#fff";
    main[0].style.zIndex=200;
    for(var i=0;i<item.length;i++){
      item[i].index=i;
      
    item[i].onmouseover=function(){
      for(var j=0;j<range.length;j++){
        range[j].style.display="none";
        item[j].style.background="#fff";
        ziti[j].style.color="#000";
      }
        range[this.index].style.display="block";
        item[this.index].style.background="#535353"
        ziti[this.index].style.color="#fff";
       }
      }
     }

  // 一楼选项卡
  
  // var item=$(".item");
  // var main=$(".main");
  // var ziti=$(".ziti");
  
  // item[0].style.background="#535353";
  // ziti[0].style.color="#fff";
  // main[0].style.zIndex=200;
  // for(var i=0;i<item.length;i++){
  //    item[i].index=i;
  //    item[i].onmouseover=function(){
  //         for(var j=0;j<main.length;j++){
  //           main[j].style.display="none";
  //           item[j].style.background="#fff";
  //           ziti[j].style.color="#000";
  //           }
  //           main[this.index].style.display="block";
  //           item[this.index].style.background="#535353";
  //           ziti[this.index].style.color="#fff";
          
  //         }   
  //    }
     
  


}
