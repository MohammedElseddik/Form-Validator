const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');

function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  formControl.className = 'form-group error';
  errorMessage.textContent = `${input.id} ${message}`;
}

function checkRequired(formInputs) {
  console.log(formInputs);
  formInputs.forEach((input) => {
    if (input.value === '') {
      showError(input, 'is required');
    }
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired(inputs);
});
