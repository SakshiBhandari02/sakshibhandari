function validation(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var conpass = document.getElementById('conpass').value;
	var mobileno = document.getElementById('mobile').value;
	var emailId = document.getElementById('email').value;
	if (user == "") {
		document.getElementById('username').innerHTML = "** Please fill the username field";
		return false;
	}

	if ((user.length <= 2) || (user.length > 20)) {
		document.getElementById('username').innerHTML = "** Username must be in between 3 to 20 characters";
		return false;
	}

	if (!isNaN(user)) {
		document.getElementById('username').innerHTML = "** only alphabets no number allowed";
		return false;
	}

	if (pass == "") {
		document.getElementById('password').innerHTML = "** Please fill the password field";
		return false;
	}

	if ((user.length <= 5) || (user.length > 20)) {
		document.getElementById('username').innerHTML = "** Password should be in between 5 and 20";
		return false;
	}

	if (pass != conpass) {
		document.getElementById('confirmpass').innerHTML = "** Password not same";
		return false;
	}

	if (conpass == "") {
		document.getElementById('confirmpass').innerHTML = "** Please fill the confirm password field";
		return false;
	}

	if (mobileno == "") {
		document.getElementById('mobileno').innerHTML = "** Please fill the mobile number field";
		return false;
	}

	if (isNaN(mobileno)) {
		document.getElementById('mobileno').innerHTML = "** mobile number must be digits not alphabets";
		return false;
	}

	if (mobileno.length!=10) {
		document.getElementById('mobileno').innerHTML = "** mobile number should be 10 digits";
		return false;
	}

	if (emailId == "") {
		document.getElementById('emailid').innerHTML = "** Please fill the email id field";
		return false;
	}

	if (emailId.indexOf('@') <=0) {
		document.getElementById('emailid').innerHTML = "** @ Invalid Position";
		return false;
	}

	if ((emailId.charAt(emailId.length-4)!='.') && (emailId.charAt(emailId.length-3)!='.')) {
		document.getElementById('emailid').innerHTML = "** . Invalid Position";
		return false;
	}

	else{
		true;
	}
}