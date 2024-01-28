import lodash from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const saveFormState = lodash.throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  form.addEventListener('input', saveFormState);

  const storedFormData = localStorage.getItem('feedback-form-state');
  if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    emailInput.value = parsedFormData.email || '';
    messageInput.value = parsedFormData.message || '';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({
      email: emailInput.value,
      message: messageInput.value,
    });

    localStorage.removeItem('feedback-form-state');

    emailInput.value = '';
    messageInput.value = '';
  });
});
