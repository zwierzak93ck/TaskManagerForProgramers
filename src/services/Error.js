import { testRegularExpression, isDateValid } from './Validation';

export const setEmailError = (emailRegExp, email) => {
    return setError(!email, 'Value cannot be empty.') ||
        setError((!testRegularExpression(emailRegExp, email) && !email.includes('@')),
            'Wrong Email. Missing "@" sign in "' + email + '".') ||
        setError((!testRegularExpression(emailRegExp, email) && email.includes('@')),
            'Wrong Email. Missing part after "@" sign in "' + email + '".'
        );
}

export const setPasswordError = (passwordRegExp, password) => {
    return setError(!password, 'Value cannot be empty.') ||
        setError(!testRegularExpression(passwordRegExp, password),
            'Wrong password. At least 6 characters, one small letter, ' +
            'one capital letter, one number and one special character are required.'
        );
}

export const setDateError = (date) => {
    console.log(!isDateValid(date))
    return setError(!date, 'Value cannot be empty') || setError(!isDateValid(date), 'Invalid date');
}

export const setError = (condition, message) => {
    return condition ? message : '';
}