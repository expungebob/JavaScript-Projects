function validate() {
    var x = document.forms["form"]["firstname"]["lname"]["email"].value;
    if (x == "") {
      alert("form must be filled out");
      return false;
    }
}
//Comments





