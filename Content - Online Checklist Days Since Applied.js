<table style="WIDTH: 100%; HEIGHT:Auto;" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td style="padding:10px;" bgcolor="#586d9c"><font size="5" color="#ffffff"><em>
            <div id="message">{#First Name#}, are you ready to take your next step?</div>
            </em></font></td>
        </tr>
    </tbody>
</table>
<div id="appDate" style="display:none">{#Fall App Date#}</div>
<div id="appStatus" style="display:none">{#Real Fall App Status#}</div>
<div id="firstName" style="display:none">{#First Name#}</div>
<script>

showDaysSinceApplied();


function showDaysSinceApplied(){
	var validateDate = /^(\d{1,2}\/){2}\d{4}$/;
	if(document.getElementById('firstName') != null){
		var firstName = document.getElementById("firstName").innerHTML;
		if(document.getElementById("tbl_SID1003_CBID40_CDID6") != null){
			document.getElementById("tbl_SID1003_CBID40_CDID6").style.width = "100%"; 
		}
		
		if(document.getElementById('appStatus') != null && (document.getElementById('appStatus').innerText == "Complete" || document.getElementById('appStatus').innerText =="Decision Pending" || document.getElementById('appStatus').innerText =="Decision Made")){

			document.getElementById("message").innerHTML = firstName+ ", thanks for completing your application!";
		}else if(document.getElementById('appStatus') != null && document.getElementById('appStatus').innerText == "Inactivated" ){

			document.getElementById("message").innerHTML = firstName+ ", thanks for your interest in Berea College.";
		}
		else if (document.getElementById('appDate') != null && validateDate.test(document.getElementById("appDate").innerText)){
			var inputValues = document.getElementById("appDate").innerText.split("/");
			var appDate = new Date(inputValues[2], inputValues[0] - 1, inputValues[1]);
			var now = new Date();
			var timeDiff = now.getTime()- appDate.getTime();
			timeDiff = Math.round(timeDiff/86400000);
			if(timeDiff ==0){
				document.getElementById("message").innerText= firstName+ ", Thanks for applying today!";
			}else if(timeDiff ==1){
				document.getElementById("message").innerText= firstName +", it's been 1 day since you applied!";
			}else if(timeDiff >=150){
				document.getElementById("message").innerText= firstName +", don't give up! You can still complete your application.";
			}else if(timeDiff >=90){
				document.getElementById("message").innerText= firstName +", complete your application to qualify for our no-tution promise!";
			}else{
				document.getElementById("message").innerText= firstName + ", it's been " + timeDiff + " days since you applied.";
			}
		}
	}
 }
 </script>