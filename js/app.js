
// Hago validaciones y capturo los eventos del boton de envio para el envio de email del turno solicitado
// forma parte de la libreria para el envío de mails de JavaScript EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Solicitando el Turno...';

   const serviceID = 'default_service';
   const templateID = 'template_xcn110q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Solicitar Turno';
      alert('Se envío un mail con el turno solicitado');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});