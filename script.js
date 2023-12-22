let dobInput = document.querySelector("#dob");

//dateOfBirthPicker Function
function showDatePicker() {
  dobInput.type = "date";
  dobInput.removeAttribute("readonly");
  dobInput.style.width = "238px";
}
