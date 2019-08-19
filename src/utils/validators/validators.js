export const requiredField = value => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxValue) => value => {
    if (value && value.length > maxValue) return `Max length is over ${maxValue} symbols`;
    return undefined;
};
export const minLengthCreator = (minValue) => value => {
    if (value && value.length < minValue) return `Min length is lower than ${minValue} symbols`;
    return undefined;
};