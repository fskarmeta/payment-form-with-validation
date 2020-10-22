let form = document.getElementById("form");
let fields = document.getElementById("fields");
let cardNumber = document.getElementById("cardinput");
let cvc = document.getElementById("cvcinput");
let amount = document.getElementById("amountinput");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postal = document.getElementById("postal");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Card Number
  if (cardNumber.value === "" || !/[0-9]{13,16}/.test(cardNumber.value)) {
    cardNumber.classList.add("alert-danger");
    cardNumber.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    cardNumber.classList.remove("alert-danger");
    cardNumber.classList.remove("is-invalid");
    cardNumber.classList.add("is-valid");
    
  }

  //CVC Number
  if (cvc.value === "" || !/^[0-9]{3,4}$/.test(cvc.value)) {
    cvc.classList.add("alert-danger");
    cvc.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    cvc.classList.remove("alert-danger");
    cvc.classList.remove("is-invalid");
    cvc.classList.add("is-valid");
   
  }
  // Amount
  if (
    amount.value === "" ||
    !/^(?:[$]|)[+-]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(
      amount.value
    )
  ) {
    amount.classList.add("alert-danger");
    amount.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    amount.classList.remove("alert-danger");
    amount.classList.remove("is-invalid");
    amount.classList.add("is-valid");
    
  }

  // First Name
  if (firstname.value === "" || !/^[a-zA-Z '.-]*$/.test(firstname.value)) {
    firstname.classList.add("alert-danger");
    firstname.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    firstname.classList.remove("alert-danger");
    firstname.classList.remove("is-invalid");
    firstname.classList.add("is-valid");
   
  }

  // Last Name

  if (lastname.value === "" || !/^[a-zA-Z '.-]*$/.test(lastname.value)) {
    lastname.classList.add("alert-danger");
    lastname.classList.add("is-invalid");
    fields.classList.remove("d-none")
    
  } else {
    lastname.classList.remove("alert-danger");
    lastname.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
    
  }

  // City
  if (city.value === "" || !/^[a-zA-Z '.-]*$/.test(city.value)) {
    city.classList.add("alert-danger");
    city.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    city.classList.remove("alert-danger");
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
    
  }

  // State
  if (state.value === "Pick a state") {
    state.classList.add("alert-danger");
    state.classList.add("is-invalid");
    fields.classList.remove("d-none");
  } else {
    state.classList.remove("alert-danger");
    state.classList.remove("is-invalid");
    state.classList.add("is-valid");
    
  }

  // Postal Code
  if (postal.value === "" || !/^[0-9]{7}(?:-[0-9]{6})?$/.test(postal.value)) {
    postal.classList.add("alert-danger");
    postal.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    postal.classList.remove("alert-danger");
    postal.classList.remove("is-invalid");
    postal.classList.add("is-valid");
    
  }

  //Message
  if (message.value === "" || message.value.length > 500) {
    message.classList.add("alert-danger");
    message.classList.add("is-invalid");
    fields.classList.remove("d-none")
  } else {
    message.classList.remove("alert-danger");
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
    
  }


  console.log("Form has been submited");
});

let cancel = document.getElementById("canceled")
cancel.addEventListener("click", e => {
    
    form.reset()
    
})
