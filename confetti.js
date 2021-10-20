https://jsfiddle.net/3zxb1rqm/


<div id="wrapper" class="wrapper" style="position:absolute;min-height:100vh;z-index3;width:100%"></div>

<script type="module">
/*Javascript*/
document.getElementById("bcHeader").innerHTML+='<div id="wrapper" class="wrapper" style="position:absolute;min-height:100vh;z-index3;width:100%"></div>';
let i =0;
let c=350;
for (i; i < c; i++) {
  create(i);
}
i=0;
for (i; i < c; i++) {
  drop(i);
}

function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 4);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "#005A8B";
      break;
    case 2:
      colour = "#3095B4";
      break;
	 case 3:
		colour="#739600";
		break;
    default:
      colour = "#C75B12";
  }
   document.getElementById("wrapper").innerHTML +='<div style="position:absolute;background-color:'+colour+';width:'+ width+'px;height:'+ height+'px;top:-200px;left:0;opacity:'+(Math.random()+0.5)+';transform:rotate('+Math.random()*360+'deg);" id="confetti-'+i+'" class="confetti-'+i+' '+colour+'"></div>';
  
}
function drop(i){

document.getElementById("confetti-"+i).animate(
   [
    {top : -Math.random()*20+"%", left : '50%'},
    {top: '100%', left : Math.random()*100+'%' }
  ], Math.random()*2000 + 2000);
}
</script>

 


