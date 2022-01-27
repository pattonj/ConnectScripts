<script type="module">
/*Created by Jacob Patton 
Preview:https://jsfiddle.net/jbongo/2n097rfg/
*/

//Adjust c for more or less confetti. 
let c=350;
//html to add
let confettiHTML='';
let confettiArray =[];
//This is used to position it on top of the screen.
//The only othter change, besides closing the div, was adjusting the start/stop trasition top values. 
confettiHTML+= '<div style="position: fixed;top: -50%;left: 0;width:100%">'

let i =0;
//create confetti pieces
for (i; i < c; i++) {
  create(i);
}
//used to close the fixed div line. 
confettiHTML+= '</div>'
//insert HTML
document.body.innerHTML += confettiHTML;

i=0; //Reset i to zero to animate
//Add pieces to array
for (i; i < c; i++) {
	confettiArray.push(document.getElementById("confetti-"+i));
}
//drop confetti 
confettiArray.forEach(drop);
 
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
  //Add confetti piece to html to be inserted. Creates it way off screen. 
   confettiHTML +='<div style="z-index:3;position:absolute;background-color:'+colour+';width:'+ width+'px;height:'+ height+'px;top:-200px;left:0;opacity:'+(Math.random()+0.5)+';transform:rotate('+Math.random()*360+'deg);" id="confetti-'+i+'" class="confetti-'+i+' '+colour+'"></div>';
}

//Drop the confetti!
function drop(i){
	//animate help: https://developer.mozilla.org/en-US/docs/Web/API/Element/animate	
	i.animate(
		[
		{top : Math.random()*50+"%", left : '50%'},//Starts in the middle and slightly above. 
		{top: 110+Math.random()*20+'vh', left : Math.random()*95+'%',transform: 'rotate('+(Math.random()*2-1)*360+'deg)' } //Stop at the bottom of div and anywhere left to right. 
		], Math.random()*2000 + 2000);
	 i.onfinish = function(i){ i.remove();};
	 }
</script>
