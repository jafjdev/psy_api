isUndefined = value => value === undefined;

isEmpty = value => value.trim() === '';

isGreaterOrEqualZero = value => value >= 0;

module.exports = {
    isUndefined,
    isEmpty,
    isGreaterOrEqualZero
};