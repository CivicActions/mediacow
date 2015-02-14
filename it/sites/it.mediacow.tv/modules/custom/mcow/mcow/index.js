// $Id$

function clearSmallSignupBox() {
  var defaultValue = "your email address";
  var f = document.getElementById("edit-email");
  if (f.value == defaultValue) {
    f.value = "";
  } else if (f.value == "") {
    f.value = defaultValue;
  }
}
