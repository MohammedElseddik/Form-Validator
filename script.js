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

function checkPasswordValidation(passwordInput) {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
      passwordInput.value
    );
  console.log('paaaaaaa', isPasswordValid, passwordInput);
  if (!isPasswordValid) {
    showError(
      passwordInput,
      'must include at least 1 uppercase character, 1 lowercase character, and 1 number.'
    );
  } else if (containsWhiteSpace(passwordInput.value)) {
    showError(passwordInput, 'must have no white spaces');
  } else {
    showSuccess(passwordInput);
  }
}

function checkPasswordMatch(password, passwordConfirmation) {
  if (password.value.trim() === passwordConfirmation.value.trim()) {
    showSuccess(passwordConfirmation);
    return;
  }
  showError(passwordConfirmation, 'do not match your password');
}

function checkInputLength(formInput, min, max) {
  if (formInput.value.length < min) {
    showError(formInput, `must be at least ${min} characters`);
  } else if (formInput.value.length > max) {
    showError(formInput, `must be less than ${max} characters`);
  } else if (containsWhiteSpace(formInput.value)) {
    showError(formInput, 'must have no white spaces');
  } else {
    showSuccess(formInput);
  }
}

function checkinputsValidity(formInputs) {
  console.log(formInputs);
  formInputs.forEach((input, index) => {
    if (input.value.trim() === '') {
      showError(input, 'is required');
      return;
    } else if (input.id === 'username') {
      checkInputLength(input, 3, 20);
    } else if (input.id === 'password') {
      checkInputLength(input, 6, 15);
      checkPasswordValidation(input);
    } else if (input.id === 'password-confirmation') {
      checkPasswordMatch(formInputs[index - 1], input);
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
