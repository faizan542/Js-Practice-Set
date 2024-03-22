// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password) {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  
    if (isValid) {
      console.log('Password saved.');
    } else {
      console.log('Password must contain uppercase, lowercase, one digit and atleast eight characters.');
    }
  
    return isValid;
  }
  
  // Example usage
  let password1 = "StrongPassword123";
  let password2 = "weakpass";
  console.log(passwordValidator(password1));
  console.log(passwordValidator(password2));
  