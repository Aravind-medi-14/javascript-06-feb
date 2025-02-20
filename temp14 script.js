function submit() {
  let mail = document.getElementById("email").value;
  let pswd = document.getElementById("pswd").value;
  // let maillast =
  if(mail=="" || pswd == ""){
    msg.innerHTML = "Email Address or password cannot be blank"; 
  }
  else if (mail == "john@gmail.com" && pswd == 1234) {
    msg.innerHTML = "Welcome John !";
  } else {
    msg.innerHTML = "Access Denied";
  }
}
