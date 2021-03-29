function Validator(options) {
  function validate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value);
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules = forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            ".form-message"
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

////////////////////////////////////////////////////////
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui long nhap truong nay";
    },
  };
};
// Validator.isEmail = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//       return regex.test(value) ? undefined : "truong nay phai la email";
//     },
//   };
// };

Validator.maxlength = function (selector, max) {
  return {
    selector: selector,
    test: function (value) {
      return value.max >= max ? `gioi han ${max} chu so` : undefined;
    },
  };
};

Validator.minlength = function (selector, max) {
  return {
    selector: selector,
    test: function (value) {
      return value.max >= max ? `gioi han ${min} chu so` : undefined;
    },
  };
};
