/*
var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput',pass_verify)


function validated()
{if(email.value.length<9)
    {
        email.style.border= "1px  solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if(password.value.length<6)
    {
        password.style.border= "1px  solid red";
        pass_error.style.display = "block";
        pasword.focus();
        return false;
    }

}
function email_verify(){
    if(email.value.length>=8)
    {
        email.style.border= "1px  solid silver";
        email_error.style.display = "none";
      
        return true;
    }
}
function pass_verify(){
    if(password.value.length>=5)
    {
        password.style.border= "1px  solid silver";
        pass_error.style.display = "none";
      
        return true;
    }
}

*/




















// Example starter JavaScript for disabling form submissions if there are invalid fields
/*
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
*/


/*
var alt = alert("User logged successfully");
console.log(alt);*/
/*
function validateForm() {
    var userame= document.forms["myform"][username].value;
    var email=document.forms['myform']['email'].value;
    var password=document.forms['myform']['password'].value;
    if(username == "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}
/*
    if(email.value.length < 9)
    {
        email.style.border= "1px  solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
  
    if(password.value.length<6)
    
        password.style.border= "1px  solid red";
        pass_error.style.display = "block";
        pasword.focus();
        return false;
    }
}

/*
var email=document.forms['myform']['email'];


var email_error = document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput',pass_verify)





   


function email_verify(){
    if(email.value.length>=8)
    {
        email.style.border= "1px  solid silver";
        email_error.style.display = "none";
      
        return true;
    }
}

function pass_verify(){
    if(password.value.length>=5)
    {
        password.style.border= "1px  solid silver";
        pass_error.style.display = "none";
      
        return true;
    }
}*/