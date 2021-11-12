<script type="module">
/*Create by Jacob Patton 
Preview:https://jsfiddle.net/jbongo/2n097rfg/1/
*/

//Create a div
var ConfettiWrapper = document.createElement("div");
//Set unique ID.
ConfettiWrapper.id = 'ConfettiWrapper';
//Set Style and z-index
ConfettiWrapper.style.cssText='position:absolute;top:0;left:0;min-height:100vh;width:100%';
ConfettiWrapper.style.zIndex=5;

let i =0;
//Adjust c for more or less confetti. 
let c=350;
//Create the inner HTML for the confetti. 
let confettiHTML='';
for (i; i < c; i++) {
  create(i);
}

//Set the innerHTML
ConfettiWrapper.innerHTML = confettiHTML;
//Append the div/Confetti to the HTML body
document.body.appendChild(ConfettiWrapper);

i=0; //Reset i to zero to animate
for (i; i < c; i++) {
  drop(i);
}

//Create the confetti. 
function create(i) {
  // Set size amd color of confetti piece. 
  let width = Math.random() * 8;
  let height = width * 0.4;
  //if you want more colors, change the numer here and set the case numbers the same. 
  let colourIdx = Math.ceil(Math.random() * 4);
  let colour;
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
  //Add confetti piece to html section. Creates it way off screen. 
   confettiHTML +='<div style="position:absolute;background-color:'+colour+';width:'+ width+'px;height:'+ height+'px;top:-200px;left:0;opacity:'+(Math.random()+0.5)+';transform:rotate('+Math.random()*360+'deg);" id="confetti-'+i+'" class="confetti-'+i+' '+colour+'"></div>';
}

//Drop the confetti!
function drop(i){
document.getElementById("confetti-"+i).animate(
   [
    {top : -Math.random()*20+"%", left : '50%'},//Starts in the middle and slightly above. 
    {top: '100%', left : Math.random()*100+'%' } //Stop at the bottom of div and anywhere left to right. 
  ], Math.random()*2000 + 2000);
//https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
}
</script>

 


