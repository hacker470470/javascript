var menuicon = document.getElementById("menu470");
var list = document.getElementById("list");
var menustatus;
menustatus = "closed";

menuicon.onclick = function(){
   if(menustatus == "closed"){
      menuicon.src = "cross.png";
      list.style.display = "block";
      menustatus = "open";
   } else{
      menuicon.src = "list.png";
   list.style.display = "none";
   menustatus = "closed";
   }
}

