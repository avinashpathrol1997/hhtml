function validateLogin() {
        if (document.f1.username.value.length ==0)	{
		document.getElementById("une").innerText="Username Can't be empty";        
		document.getElementById("une").style.color="red";
		return false;
        }
	else
	{
		document.getElementById("une").innerText="";
	}
	if ((document.f1.username.value.length>0)&&(document.f1.username.value.length<6))
	{	document.getElementById("une").innerText="Username should contain minimum of 6 characters";        
		document.getElementById("une").style.color="blue";
        	return false;
	}
	else
	{
		document.getElementById("une").innerText="";
	}
	if(document.f1.password.value.length<6)
	{	
	document.getElementById("pwde").innerText="Username should contain minimum of 6 characters"
	document.getElementById("pwde").style.color="red";
	return false;
	}
	
  }

function validateReg() {
if (document.register.username.value.length ==0)	{
		document.getElementById("une1").innerText="Username Can't be empty";        
		document.getElementById("une1").style.color="red";
		return false;
        }
	else
	{
		document.getElementById("une1").innerText="";
	}
	if ((document.register.username.value.length>0)&&(document.register.username.value.length<6))
	{	document.getElementById("une1").innerText="Username should contain minimum of 6 characters";        
		document.getElementById("une1").style.color="blue";
        	return false;
	}
	else
	{
		document.getElementById("une1").innerText="";
	}
	if(document.register.password.value.length<6)
	{	
	document.getElementById("pwde1").innerText="Username should contain minimum of 6 characters"
	document.getElementById("pwde1").style.color="red";
	return false;
	}
	
  }
