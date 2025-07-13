const btn = document.getElementById("send-email");
const form = document.getElementById("contact-form");
const emailError = document.getElementById("email-error");
const emailInput = form.querySelector('input[type="email"]');
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/im;

function validateEmail() {
  const emailValue = form.email.value.trim();

  if (!emailRegex.test(emailValue)) {
    emailError.hidden = false;
    emailInput.focus();
    return false;
  } else {
    emailError.hidden = true;
    return true;
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!validateEmail()) {
    return
  }

  // button animation while sending
  btn.disabled = true;
  btn.classList.toggle('blink-pulsate');
  btn.innerHTML = "Enviando correo...";

  const serviceID = "default_service";
  const templateID = "template_yycxo07";
  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerHTML = "Enviar correo";
      alert("Tu email ha sido enviado exitosamente!");
      btn.classList.toggle('blink-pulsate');
      form.reset()
      btn.disabled = false;
    }).catch((err) => {
      btn.innerHTML = "Enviar correo";
      alert(`Tu email no ha podido ser enviado :( \n Error: ${JSON.stringify(err)}`);
      btn.classList.toggle('blink-pulsate');
      btn.disabled = false;
    });
});
