function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSpecialChars = document.getElementById("specialChars").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_~`}{[]:;?><,./-=";
    let characterPool = "";

    if (useUppercase) characterPool += uppercaseChars;
    if (useLowercase) characterPool += lowercaseChars;
    if (useNumbers) characterPool += numberChars;
    if (useSpecialChars) characterPool += specialChars;

    if (characterPool === "") {
      document.getElementById("password").innerText = "Please select at least one character type.";
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }

    document.getElementById("password").innerText = password;
  }