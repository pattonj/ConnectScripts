<table style="WIDTH: 100%; HEIGHT:Auto;" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <!--<td style="padding:10px;" bgcolor="#586d9c"><font size="5" color="#ffffff"><em>-->
            <td style="padding:10px;" bgcolor="#005a8b"><font size="5" color="#ffffff"><em>
            <div id="message">{#First Name#}, are you ready to take your next step?</div>
            </em></font></td>
        </tr>
    </tbody>
</table>


<script>

let appDate = "{#Fall App Date#}";
let appStatus = "{#Real Fall App Status#}";
let appDecision = "{#Real Fall App Decision#}";
let firstName = "{#First Name#}";
let decisionReleaseDate = "{#Decision Release Date#}";


showDaysSinceApplied();


function showDaysSinceApplied(){
	var validateDate = /^(\d{1,2}\/){2}\d{4}$/;
	
	if(document.getElementById("tbl_SID1003_CBID40_CDID6") != null){
			document.getElementById("tbl_SID1003_CBID40_CDID6").style.width = "100%"; 
		}
		
	
	if(document.getElementById('firstName') != ""){
		if(appStatus != "" && (appStatus == "Complete" || appStatus =="Decision Pending" || appStatus =="Decision Made")){
			document.getElementById("message").innerHTML = firstName+ ", thanks for completing your application!";
			if (decisionReleaseDate !="" && appDecision !=""){
				document.getElementById("message").style.textAlign="center";				
				document.getElementById("message").innerHTML="<img style='max-width:250px;width:100%;' src='https://static.askadmissions.net/berea/usermedia/Hosted images/admissions_white.png' alt='Admissions Logo'>";	
			}
		}else if(appStatus != "" && appStatus == "Inactivated" ){
			document.getElementById("message").innerHTML = firstName+ ", thanks for your interest in Berea College.";
		}
		else if (appDate != null && validateDate.test(appDate)){
			let inputValues = appDate.split("/");
			appDate = new Date(inputValues[2], inputValues[0] - 1, inputValues[1]);
			let now = new Date();
			let timeDiff = now.getTime()- appDate.getTime();
			timeDiff = Math.round(timeDiff/86400000);
			if(timeDiff ==0){
				document.getElementById("message").innerText= firstName+ ", Thanks for applying today!";
			}else if(timeDiff ==1){
				document.getElementById("message").innerText= firstName +", it's been 1 day since you applied!";
			}else if(timeDiff >=150){
				document.getElementById("message").innerText= firstName +", don't give up! You can still complete your application.";
			}else if(timeDiff >=90){
				document.getElementById("message").innerText= firstName +", complete your application to qualify for our no-tuition promise!";
			}else{
				document.getElementById("message").innerText= firstName + ", it's been " + timeDiff + " days since you applied.";
			}
		}
	}
 }
 </script>