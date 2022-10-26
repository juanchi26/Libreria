// user:        eljose1960@mail.com
// password:    pepe1960
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");

function setUserEmail() {
    localStorage.setItem('email', email.value);
  };

  
document.addEventListener("DOMContentLoaded", function () {

document.getElementById("submitBtn").addEventListener("click", function () {

    if (email.value == "") {
        email.classList.add("is-invalid");
    } 

    if (password.value == "") {
        password.classList.add("is-invalid");
    } 

    if (email.value != "" & password.value != "") {
        window.location.href = "./portada.html";
        setUserEmail();
    }

})
})