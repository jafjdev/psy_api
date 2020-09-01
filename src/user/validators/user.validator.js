const {isEmpty, validateDate, isUndefined} = require('../../utils/helpers/validator/global.validators');
const CustomError = require('../../utils/error/CustomError');

const CreateUserValidator = (email, password, userDetail) => {

    if (isUndefined(password)) {

        throw new CustomError("Contraseña es un campo requerido", 400);

    }

    if (isEmpty(password)) {

        throw new CustomError("Contraseña no debe ser vacios", 400);

    }
    UpdateUserValidator(email, userDetail)
};

const UpdateUserValidator = (id, email, userDetail) => { //validates everything but password
    if (isUndefined(id) || isUndefined(email) || isUndefined(userDetail)) {
        throw new CustomError("Es necesario enviar todos los campos", 400);
    }

    if (isEmpty(email) || isEmpty(id.toString())) {
        throw new CustomError("El correo no debe ser vacios", 400);
    }

    UserDetailValidator(userDetail);
};

const UserDetailValidator = detail => {
    if (isUndefined(detail.firstName) || isUndefined(detail.lastName) || isUndefined(detail.birthday)
        || isUndefined(detail.birthday.day) || isUndefined(detail.birthday.month)
        || isUndefined(detail.birthday.year) || isUndefined(detail.age) || isUndefined(detail.religion)
        || isUndefined(detail.occupation) || isUndefined(detail.educationLevel)) {

        throw new CustomError("Es necesario enviar todos los campos", 400);
    }


    if (isEmpty(detail.firstName) || isEmpty(detail.lastName) || isEmpty(detail.birthday)
        || isEmpty(detail.birthday.day.toString()) || isEmpty(detail.birthday.month.toString())
        || isEmpty(detail.birthday.year.toString()) || isEmpty(detail.age.toString()) || isEmpty(detail.religion)
        || isEmpty(detail.occupation) || isEmpty(detail.educationLevel)) {

        throw new CustomError("Los campos no pueden ser vacios.", 400);
    }

};


const GetUserByUUIDValidator = body => {
};

module.exports = {
    CreateUserValidator,
    UserDetailValidator,
    GetUserByUUIDValidator,
    UpdateUserValidator
};