document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.getElementById('submitButton');
  var dismissButton = document.getElementById('dismissButton');
  var fondo = document.querySelector('.aparece'); // Selecciona el div fondo
  var fondofinal = document.querySelector('.fondofinal'); // Selecciona el div fondofinal
  var confirmedEmail = document.getElementById('confirmed-email'); // Selecciona el span para el correo confirmado

  // Guarda las clases originales del fondo
  var fondoOriginalDisplay = window.getComputedStyle(fondo).display;

  submitButton.addEventListener('click', function(event) {
    var emailInput = document.querySelector('input[type="email"]');
    var email = emailInput.value;
    var validEmailMessage = document.querySelector('.request .error-message'); // Selecciona el mensaje de error

    if (!validateEmail(email)) {
      emailInput.classList.add('invalid');
      validEmailMessage.style.display = 'block'; // Muestra el mensaje de error
      event.preventDefault();
    } else {
      emailInput.classList.remove('invalid');
      validEmailMessage.style.display = 'none'; // Oculta el mensaje de error si el email es válido

      // Muestra el div fondofinal
      fondofinal.style.display = 'block';

      // Oculta el div fondo
      fondo.style.display = 'none';

      // Actualiza el span con el correo electrónico ingresado
      confirmedEmail.textContent = email;
    }
  });

  // Agrega un evento de clic al botón Dismiss message
  dismissButton.addEventListener('click', function(event) {
    // Oculta el div fondofinal
    fondofinal.style.display = 'none';

    fondo.style.display='block';
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
