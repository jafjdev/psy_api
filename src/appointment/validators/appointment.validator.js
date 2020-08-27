const {isUndefined, isEmpty, validateDate} = require('../../utils/helpers/validator/global.validators');
const CustomError = require('../../utils/error/CustomError');


const validateMakeAppointment = (date, type) => {
    if (isUndefined(date) || isUndefined(date.day) ||
        isUndefined(date.month) || isUndefined(date.year) ||
        isUndefined(type)) {
        throw new CustomError("Date & Type are required values");
    }
    if (isEmpty(type)) {
        throw new CustomError("Date & Type are required values");
    }
    if (!validateDate(date.day, date.month)) {
        throw new CustomError("Day should be between 1 & 31 and Month between 1 & 12")
    }
};
module.exports = {
    validateCreateAppointment: validateMakeAppointment
};