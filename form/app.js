function myFunction(event) {
   var theEvent = event || window.event;

   var key = theEvent.keyCode || theEvent.which;
   var p = document.getElementById("inputuser4").value;
     if(p.length < 5 || key > 47 && key < 58){
      document.getElementById("user").innerHTML = "username atleast contain 5 charecter"
      document.getElementById("user").innerHTML = "entered correct Username with numeric value"
     }
   //   else if(){
     
   //   }

     else if ( (key > 64 && key < 91) || (key > 96 && key < 123)) {
         document.getElementById("user").innerHTML = "entered correct Username"
      }
      else {
         theEvent.returnValue = false;
         if (theEvent.preventDefault) theEvent.preventDefault();
    }


}
function password() {
   var data = document.getElementById("inputPassword4").value;

   var capital = 0;
   var small = 0;
   var number = 0;
   var special = 0;

   for (let i = 0; i < data.length; i++) {
      var ascii = data.charCodeAt(i);

      if (ascii > 64 && ascii < 91) {
         ++capital;
      } else if (ascii > 96 && ascii < 123) {
         ++small;
      } else if (ascii > 47 && ascii < 58) {
         ++number;
      } else if (
         (ascii > 31 && ascii < 48) ||
         (ascii > 57 && ascii < 65) ||
         (ascii > 90 && ascii < 97) ||
         (ascii > 122 && ascii < 127)
      ) {
         ++special;
      }
   }

   if (data.length < 5) {
      document.getElementById("passw").innerHTML =
         "password must be contain minimum 5 character";
   } else if (capital > 0 && small > 0 && number > 0 && special > 0) {
      document.getElementById("passw").innerHTML = "";
   } else {
      document.getElementById("passw").innerHTML = "invalid password";
   }
}

function cheackPass() {
   var pas1 = document.getElementById("inputPassword4").value;
   var pas2 = document.getElementById("inputPassword5").value;

   if (pas1 != pas2) {
      document.getElementById("conf").innerHTML = "password does not match";
   } else {
      document.getElementById("conf").innerHTML = "passwords are match";
   }
}

function ValidateEmailAddress() {
   var emailString = document.getElementById("inputEmail4").value;
   console.log(emailString);

   var atSymbol = emailString.indexOf("@");
   var dot = emailString.indexOf(".");
   var gmail = emailString.includes("gmail");
   var yahoo = emailString.includes("yahoo");
   var hotmail = emailString.includes("hotmail");
   if (
      atSymbol < 1 ||
      dot <= atSymbol + 2 ||
      dot === emailString.length - 1 ||
      gmail ||
      yahoo ||
      hotmail
   ) {
      document.getElementById("email").innerHTML = "email is not valid";
   } else {
      document.getElementById("email").innerHTML = "";
   }
}

function zip(event) {
   var zipcode = document.getElementById("inputzipcode4").value;

   var theEvent2 = event || window.event;

   var key2 = theEvent2.keyCode || theEvent2.which;

   if (key2 > 47 && key2 < 59) {
      document.getElementById("zip1").innerHTML = "you entered correct Zipcode";
   } else {
      theEvent2.returnValue = false;
      if (theEvent2.preventDefault) theEvent2.preventDefault();
   }
}

function saveData()
{
    var obj = {
        title : document.getElementById("title").value,
        firstName: document.getElementById("inputuser4").value,
        lastName: document.getElementById("inputuser5").value,
        email: document.getElementById("inputEmail4").value,
        password: document.getElementById("inputPassword4").value,
        confirmPassword: document.getElementById("inputPassword5").value,
        acceptTerms: true

    }
    // http://localhost:4000/accounts/register
    fetch("http://localhost:4000/accounts/register",{
        method: "POST",
        body : JSON.stringify(obj),
       headers: {
"Content-type": "application/json; charset=UTF-8"
}
    }).then(y=>y).then(y=> {
        console.log(y);
    })
   }
