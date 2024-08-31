let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');

}

//form validation///
var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
//var messageError = document.getElementById('msg_error');
var submitError = document.getElementById('submit_error');
var phoneError = document.getElementById('number_error');

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = 'Invalid name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

 function validatePhone(){
     var phone = document.getElementById('phone').value;

     if(phone.length == 0){
         phoneError.innerHTML = 'Phone number is required';
         return false;
     }
     if(phone.length !== 10){
         phoneError.innerHTML = 'Phone number should be 10 digits';
         return false;
     }
     if(!phone.match(/^[0-9]{10}$/)){
         phoneError.innerHTML = '10 Digits only';
         return false;
     }

     phoneError.innerHTML = '';
     return true;
 }

/*function validateMessage() {
    var message = document.getElementById('message').value;
    var required = 15;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i id="tick-error" class="fa-solid fa-circle-check"></i>';
    return true;
}
*/
function validateForm() {
    if ( !validateName() || !validateEmail() || !validatePhone()) {
        submitError.innerHTML = 'Please fill all fields correctly and submit';
          alert("Enter the field correctly!")
        setTimeout(function() { submitError.innerHTML = ''; }, 3000);
        return false;
    }
    submitError.innerHTML = '';
    return true;
}
