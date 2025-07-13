const btn = document.getElementById("send-email");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // button animation while sending
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
    },
    (err) => {
      btn.innerHTML = "Enviar correo";
      alert(`Tu email no ha podido ser enviado :( \n Error: ${JSON.stringify(err)}`);
      btn.classList.toggle('blink-pulsate');
    }
  );
});
