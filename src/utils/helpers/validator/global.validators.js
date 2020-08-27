isUndefined = value => value === undefined;

isEmpty = value => value.trim() === '';

isGreaterOrEqualZero = value => value >= 0;

isBetween = (value, minVal, maxVal) => minVal <= value && value <= maxVal;

const validateDate = (day, month) => (isBetween(day, 1, 31) && isBetween(month, 1, 12));


module.exports = {
    isUndefined,
    isEmpty,
    isGreaterOrEqualZero,
    isBetween,
    validateDate
};