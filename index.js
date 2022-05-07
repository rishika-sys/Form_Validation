// Javascript validation for password field

function Validation()
{
    let pass=document.getElementById("exampleInputPassword1").value;
    let email=document.getElementById("exampleInputEmail1").value;// to get the value from user.
    var len=pass.length;
    
    //contains atleast one upper case.
    regexp1="(?=.*?[A-Z])"
    //contains atleast one digit.
    regexp2="(?=.*?[0-9])"
    let flag=1;
    // regexp ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$";
    // lengthcheck
    for(var i=0;i<email.length;i++)
    {
        if(email[i]==".")
        {
            flag==0;
        }
    }if(flag==1)
    {
        document.getElementById("emailmsg").style.display="";
        document.getElementById("emailmsg").innerHTML="You have missed `.` ";
        return false;
    
    }
    
    
    if(len < 8)
    {
        document.getElementById("passmsg").style.display="";
        document.getElementById("passmsg").innerHTML="Length should be greater than 8";
    //  alert(x);
    return false;
      
    }
    // Upper case check
    //  if(passwd.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
    // console.log("hi")
    if(!pass.match(regexp1))
    {
        document.getElementById("passmsg").style.display="";
        document.getElementById("passmsg").innerHTML="Wrong password setup, Please enter atleast one upperCase";
        return false;   

    }
    if(!pass.match(regexp2))
    {
        document.getElementById("passmsg").style.display="";
        document.getElementById("passmsg").innerHTML="Wrong password setup, Please enter atleast one digit";
        return false;   
    }


}

