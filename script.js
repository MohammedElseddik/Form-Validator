const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');

function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  formControl.className = 'form-group error';
  errorMessage.textContent = `${input.id} ${message}`;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-group success';
}

function containsWhiteSpace(string) {
  return /\s/.test(string);
}

function checkInputLength(formInput, min, max) {
  if (formInput.value.length < min) {
    showError(formInput, `must be at least ${min} characters`);
  } else if (formInput.value.length > max) {
    showError(formInput, `must be less than ${max} characters`);
  } else if (containsWhiteSpace(formInput.value)) {
    console.log(containsWhiteSpace(formInput.value));
    showError(formInput, 'must have no white spaces');
  } else {
    showSuccess(formInput);
  }
}

function checkinputsValidity(formInputs) {
  console.log(formInputs);
  formInputs.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, 'is required');
      console.log('not a name or password');
      return;
    } else if (input.id === 'username') {
      checkInputLength(input, 3, 20);
    }
  });
}

function checkUserName(formInputs) {
  formInputs;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkinputsValidity(inputs);
});
