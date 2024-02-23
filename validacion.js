document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitButton');
  
    submitButton.addEventListener('click', function(event) {
      var emailInput = document.querySelector('input[type="email"]');
      var email = emailInput.value;
  
      if (!validateEmail(email)) {
        emailInput.classList.add('invalid');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  