export const isNotNull = (values) => {
    values.forEach(element => {
    });
    return values.every(element => {
        return element.length > 0;
    });
}

export const compareValues = (values) => {
    return values.every(element => {
        console.log(element)
        return element === values[0];
    })
}

export const testRegularExpression = (expression, value) => {
    return expression.test(value);
}

export const isDateValid = (date) => {
    return Date.parse(date) ? true : false;
}

