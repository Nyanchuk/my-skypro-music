export const validatePassword = (password) => {
    // проверка на пустые поля
    if (!password) {
        return "Поле пароля не может быть пустым!";
    }
    
    // Проверка длины пароля
    if(password.length < 8) {
      return "Введённый пароль слишком короткий";
    }
  
    // Проверка на вхождение букв
    if(!/[a-zA-Z]/.test(password)) {
      return "Введённый пароль состоит только из цифр.";
    }
    return "";
}

export const validateEmail = (email) => {
    // Валидация email по регулярному выражению
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
        return "Введен некорректный e-mail";
    }
    if (!email) {
        return "Поле логина не может быть пустым!";
    }
    return "";
}

export const registerValidatePassword = (password, repeatPassword) => {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialChar = /[!@#$%^&*;']/g;
    // проверка на пустые поля
    if (!password) {
        return "Поле пароля не может быть пустым!";
    }
    
    // Проверка длины пароля
    if(password.length < 8) {
      return "Введённый пароль слишком короткий";
    }

    // Проверка на вхождение букв
    if(!lowerCaseLetters.test(password) || !upperCaseLetters.test(password)) {
        return "Пароль должен содержать как минимум одну строчную и одну заглавную букву";
    }

    // Проверка на вхождение цифр
    if(!numbers.test(password)) {
        return "Пароль должен содержать как минимум одну цифру";
    }

    // Проверка на вхождение специфических символов
    if (!specialChar.test(password)) {
        return "Пароль должен содержать как минимум один специальный символ. (например, ! @ # $ % ^ & * ; ' )";
    }

    // Проверка подтверждения пароля
    if(password !== repeatPassword) {
        return "Пароли не совпадают.";
    }

    return "";
}