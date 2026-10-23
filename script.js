const form = document.getElementById('interest-form');
const status = document.getElementById('form-status');
document.getElementById('year').textContent = new Date().getFullYear();
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Sending your interest…';
  status.textContent = '';
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Thank you! Your interest has been sent successfully.';
  } catch (_) {
    status.textContent = 'We could not send your message. Please try again.';
  } finally {
    button.disabled = false;
    button.innerHTML = `I'm Interested in Becoming a Broadcaster <span aria-hidden="true">↗</span>`;
  }
});
