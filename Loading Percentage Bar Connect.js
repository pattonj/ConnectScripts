<div id="BC_Progress_Bar" style="display:none">
<div id="BC_Left_Text" style="float:left;text-align:center;display:none;"><p>Application<br>Complete</p></div>
<div id="BC_Right_Text" style="float:right;text-align:center;display:none;"><p>Decision<br>Made</p></div>
<div id="BC_pbar" style="width:100%;display:inline-block;">
<div id="BC_pbar_outerdiv" style="width: 100%; height: 30px; border: 1px solid grey; z-index: 1; position: relative; border-radius: 5px; -moz-border-radius: 5px;">
<div id="BC_pbar_innerdiv" style="background-color: #3095B4; background-Image:linear-gradient(to right, #3095B4, #96FBFF); z-index: 2; height: 100%; width: 0%;"></div>
<div id="BC_pbar_innertext" style="z-index: 3; position: absolute; top: 5px; left: 0; width: 100%; height: 100%; color: black; font-weight: bold; text-align: center;">0%</div>
</div>
</div>
<div id="BC_Pbar_message" style="display:none;text-align:center;padding-top:0.5em;"></div>
</div>


<noscript>Your application decision is pending.</noscript>

<script type="module">

//VARIABLES// 	
let BC_Bar_AppStatus = "{#Real Fall App Status#}";
let BC_Bar_AppDecision = "{#Real Fall App Decision#}";
let BC_Bar_AppDateCompleted = BC_Bar_Date_Validate("{#Date Application Completed#}");
let BC_Bar_CounselorChatDateAssigned = BC_Bar_Date_Validate("{#Counselor Chat Assigned#}");
let BC_Bar_CounselorChatScheduled = "{#Counselor Chat Scheduled#}";
let BC_Bar_CounselorChatComplete = "{#Counselor Chat Completed#}";


//Sets the table width to 100% so that it can go all the way across. 
if(document.getElementById("tbl_SID1081_CBID5876_CDID4943") != null){
	document.getElementById("tbl_SID1081_CBID5876_CDID4943").style.width = "100%"; 
}

/*Function bar percentage*/
	//For Incompletes
	if(BC_Bar_AppDecision == "" && BC_Bar_AppStatus == "Incomplete"){
		//Check the list of images/ID's that show up. 
		const CheckListItems = ["BC_TR_Yes", "BC_TR_No", "BC_CE_Yes", "BC_CE_No", "BC_EE_Yes", "BC_EE_No", "BC_TS_Yes", "BC_TS_No", "BC_FAFSA_Yes", "BC_FAFSA_No", "BC_PC_Yes", "BC_PC_No"];
		let ItemTotalCount = 0;
		let ItemComplteCount = 0; 
		for (let x of CheckListItems){
			//If it has "yes", we know that item is complete. 
			if(x.includes("Yes")){
				if(document.getElementById(x)!=null){
					ItemComplteCount += 1; //Completed
					ItemTotalCount += 1; //Total incomplete and complete
				}
			}
			//Othewise, if it exists, item is not complete.  
			else{
				if(document.getElementById(x)!=null){
					ItemTotalCount += 1; 
				}
			}
		}
		//Make sure we aren't diving by zero! 
		if(ItemTotalCount!= 0){
			
			//set percentage of bar
			let percentage = Math.round((ItemComplteCount / ItemTotalCount)*100);
			document.getElementById("BC_pbar_innerdiv").style.width = percentage + "%";
			document.getElementById("BC_pbar_innertext").innerText = percentage + "%" + " complete";
			document.getElementById("BC_Progress_Bar").style.display="";
		}
	}
	//For Completes
	else if(BC_Bar_AppStatus == "Complete" || BC_Bar_AppStatus == "Decision Made" || BC_Bar_AppStatus == "Decision Pending" ){
		let BC_Bar_CurrentDate;
		let BC_Bar_DecisionDate = new Date();
		const BC_Bar_DecisionDate1 = new Date(2021,11,20);
		const BC_Bar_DecisionDate2 = new Date(2022,1,19);
		const BC_Bar_DecisionDate3 = new Date(2022,3,8);
				
		if(BC_Bar_CounselorChatDateAssigned!="" && BC_Bar_CounselorChatScheduled == ""){
			BC_Bar_CurrentDate = BC_Bar_CounselorChatDateAssigned;
		}else{
			BC_Bar_CurrentDate = new Date();
		}
		//set decision dates
		if(BC_Bar_DecisionDate.getTime()<= BC_Bar_DecisionDate1.getTime()){
			BC_Bar_DecisionDate = BC_Bar_DecisionDate1;
		} else if(BC_Bar_DecisionDate<= BC_Bar_DecisionDate2.getTime()){
			BC_Bar_DecisionDate = BC_Bar_DecisionDate2;
		}else if(BC_Bar_DecisionDate<= BC_Bar_DecisionDate3.getTime()){
			BC_Bar_DecisionDate = BC_Bar_DecisionDate3;
		}else{
			BC_Bar_DecisionDate.setDate(BC_Bar_DecisionDate.getDate() + 4);
		}
		
		//Set percentage
		let percentage;
		let myMainText;
		let myMessage;
	
			//Check to make sure app date < Current date <Decision Date
			if(BC_Bar_AppDateCompleted.getTime()<=BC_Bar_CurrentDate.getTime()&& BC_Bar_CurrentDate.getTime()<BC_Bar_DecisionDate.getTime()){
				//set the percentage
				percentage = (Math.round((BC_Bar_CurrentDate.getTime()-BC_Bar_AppDateCompleted.getTime())/(BC_Bar_DecisionDate.getTime()-BC_Bar_AppDateCompleted.getTime())*100));
				//Set bar text
				if( (BC_Bar_CurrentDate.getTime()-BC_Bar_AppDateCompleted.getTime())/86400000<6 && BC_Bar_CounselorChatDateAssigned =="" ){
					myMainText="Application Complete!";
					myMessage="Great work!  You’ve submitted all required application components.  We’ll begin reviewing your file immediately.";
				}else if( BC_Bar_CounselorChatDateAssigned!="" && BC_Bar_CounselorChatScheduled == "" && BC_Bar_CounselorChatComplete ==""){
					document.getElementById("BC_pbar_outerdiv").style.background="#FFFF00"; 
					myMainText="Chat Needed!";
					myMessage='<table style="color:#ffffff; background-color:#3095B4"><tbody><tr><td style="width:100%;margin: auto; padding:5px;text-align:center" colspan="2"><em><strong>Admissions Counselor Chat Required</strong></em></td></tr><tr><td><img src="https://staticiad.askadmissions.net/berea/usermedia/checklist/interview_white.png" style="padding:5px" alt=""></td><td style="margin: auto; padding:5px;">Your Admissions Counselor needs to schedule a quick 10-15 minute chat to get to know you a little better. The chat is required before a decision can be released. <a style="color:#ffffff" href="{#Recruiter Calendly#}">Schedule Now</a><br></td></tr></tbody></table>';
				}else if( BC_Bar_CounselorChatDateAssigned!="" && BC_Bar_CounselorChatScheduled != "" && BC_Bar_CounselorChatComplete ==""){
					myMainText="Chat Scheduled";
					myMessage='<table style="color:#ffffff; background-color:#3095B4"><tbody><tr><td style="width:100%;margin: auto; padding:5px;text-align:center" colspan="2"><em><strong>Admissions Counselor Chat Required</strong></em></td></tr><tr><td><img src="https://staticiad.askadmissions.net/berea/usermedia/checklist/interview_white.png" style="padding:5px" alt=""></td><td style="margin: auto; padding:5px;">Your Admissions Counselor has scheduled a quick 10-15 minute chat to get to know you a little better. The chat is required before a decision can be released. </td></tr><tr><td style="margin: auto; padding: 5px; text-align: center;" colspan="2"><img style="width:100%;max-width:850px; src="https://staticiad.askadmissions.net/berea/usermedia/Email%20Banners/Email%20Images/How_to_Ace_Your_Chat_horizontal.jpg" style="text-align: center;" alt=""></td></tr></tbody></table>';
				}else if(BC_Bar_DecisionDate.getTime()<= BC_Bar_DecisionDate3.getTime()){
					myMainText="Committee Review";
					myMessage="Your application decision is pending. Check back here for updates! The next decision release date is by: "+ (BC_Bar_DecisionDate.getMonth()+1) +"/"+ BC_Bar_DecisionDate.getDate() +"/"+BC_Bar_DecisionDate.getFullYear();					
				}else{
					myMainText="Committee Review";
					myMessage="Your application decision is pending. Check back here for updates in the near future!";				
				}
				
			
			}else{
				percentage=50;
				myMainText="Committee Review";
				myMessage="Your application decision is pending. Check back here for updates!";
			}
		
		//update HTML*/
		//Sets the table width to 100% so that it can go all the way across. 
		if(document.getElementById("tbl_SID1081_CBID5876_CDID4943") != null){
			document.getElementById("tbl_SID1081_CBID5876_CDID4943").style.width = "100%"; 
		}
		document.getElementById("BC_Left_Text").style.display="";
		document.getElementById("BC_Right_Text").style.display="";
		document.getElementById("BC_pbar_innerdiv").style.width = percentage + "%";
		document.getElementById("BC_pbar_innertext").innerText = myMainText;
		document.getElementById("BC_Pbar_message").innerHTML = myMessage;
		document.getElementById("BC_Pbar_message").style.display="block";
		document.getElementById("BC_Progress_Bar").style.display="";
		
		}

//Validate and create date to reduce functions
function BC_Bar_Date_Validate(myDate){
	console.log(myDate);
		if(myDate!= null && /^(\d{1,2}\/){2}\d{4}$/.test(myDate)){
			let BC_Bar_TempDate = myDate.split("/");
			return (new Date(BC_Bar_TempDate[2], BC_Bar_TempDate[0] - 1, BC_Bar_TempDate[1]));						
		}
		else{
			return "";
		}
	}
</script>	
