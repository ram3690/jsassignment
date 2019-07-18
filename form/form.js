
function validateForm() {
	console.log("sd");
  var x = document.myForm.enteredName.value;
	console.log(x.length);
  if (x.length<3 ||x.length>10) {
    alert("Name must be atleast 3");
//    return false;
  }
}