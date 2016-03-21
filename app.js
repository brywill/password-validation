/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

// declare global array for error logging
var errors = [];

/*
You'll probably find this function useful...
 */
submit.onclick = function () {
  // declare local arrays for error logging
  var firstPasswordErrors = [];
  var secondPasswordErrors = [];

  // check firstPassword; push errors to local array
  checkErrors(firstPasswordInput);
  for (var i = 0; i < errors.length; i++) {
    firstPasswordErrors.push(errors[i]);
  };
  // clear global
  errors = [];

  // check secondPassword and matching; push errors to local array
  checkErrors(secondPasswordInput);
  checkMatch(firstPasswordInput, secondPasswordInput);
  for (var i = 0; i < errors.length; i++) {
    secondPasswordErrors.push(errors[i]);
  };
  // clear global
  errors = [];

  // set validation
  if (firstPasswordErrors.length > 0 || secondPasswordErrors.length > 0) {
    firstPasswordInput.setCustomValidity(firstPasswordErrors.join(', '));
    secondPasswordInput.setCustomValidity(secondPasswordErrors.join(', '));
    console.log(firstPasswordErrors, secondPasswordErrors);
  } else {
    firstPasswordInput.setCustomValidity('');
    secondPasswordInput.setCustomValidity('');
    console.log('passed!');
  };
};

// log errors to global array
function checkErrors(password) {
  if (password.value.length < 17) {
    errors.push('Password must be at least 16 characters');
  };
  if (password.value.length > 100) {
    errors.push('Password cannot be more than 100 characters');
  };
  if (!password.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
    errors.push('Please use a required symbol');
  };
  if (!password.value.match(/[0-9]/g)) {
    errors.push('Please use a required number');
  };
  if (!password.value.match(/[a-z]/g)) {
    errors.push('Please use a lowercase letter');
  };
  if (!password.value.match(/[A-Z]/g)) {
    errors.push('Please use an uppercase letter');
  };
  if (password.value.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)) {
    errors.push('Please do not use an illegal character');
  };
};

function checkMatch(a, b) {
  if (a.value !== b.value) {
    errors.push('Passwords must match');
  };
};
