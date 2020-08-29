const {models} = require('../../sequelize');
const sequelize = require('../../sequelize');
const utils = require('../utils/utils');

const createUser = async (email, password, userDetail) => {
    try {
        return sequelize.transaction(async (t) => models.user.create({
            email: email,
            password: password,
            userDetail: {
                firstName: userDetail.firstName,
                lastName: userDetail.lastName,
                birthday: new Date(userDetail.birthday.year, userDetail.birthday.month, userDetail.birthday.day),
                age: userDetail.age,
                gender: userDetail.gender,
                religion: userDetail.religion,
                occupation: userDetail.occupation,
                educationLevel: userDetail.educationLevel,
            }
        }, {include: models.userDetail, t}));
    } catch (error) {
        throw error;
    }
};

const getUsers = async (page, size) => {
    const {limit, offset} = utils.getPagination(page, size);
    try {
        return models.user.findAndCountAll({
            include: models.userDetail,
            limit,
            offset,
        });
    } catch (error) {
        throw (error);
    }
};

const getUserByUUID = async uuid => {
    try {
        return User.findOne({where: {uuid: uuid}});
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserByID
};