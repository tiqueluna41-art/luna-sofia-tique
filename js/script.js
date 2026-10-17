const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get('name').toString().trim();
  const email = formData.get('email').toString().trim();
  const phone = formData.get('phone').toString().trim() || 'No indicado';
  const message = formData.get('message').toString().trim();

  const subject = encodeURIComponent(`Solicitud desde la web de NexaTech - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
  );

  formStatus.textContent = 'Datos validados. Se abrirá tu aplicación de correo para enviar la solicitud. Esta demo no almacena información.';
  window.location.href = `mailto:hola@nexatech.example?subject=${subject}&body=${body}`;
});
