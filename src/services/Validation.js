export const isNotNull = (values) => {
    return values.every(element => {
        return element.length > 0;
    });
}

export const compareValues = (values) => {
    return values.every(element => {
        return element === values[0];
    })
}

export const testRegularExpression = (expression, value) => {
    return expression.test(value);
}

