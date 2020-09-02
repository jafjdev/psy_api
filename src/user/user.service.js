const {models} = require('../../sequelize');
const sequelize = require('../../sequelize');
const utils = require('../utils/utils');

const createUser = async (email, password, userDetail) => {
    try {
        return sequelize.transaction(async (t) =>
            models.user.create({
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
        return models.user.findAndCountAll({include: models.userDetail, limit, offset,});
    } catch (error) {
        throw (error);
    }
};

const updateUser = async (id, updatedEmail, updatedDetail) => {
    const dbUser = await getUserByID(id);

    try {
        return sequelize.transaction(async (t) =>
            dbUser.update({email: updatedEmail, userDetail: updatedDetail}, {include: models.userDetail, t}));
    } catch (error) {
        throw error;
    }
};
const deleteUser = async id => {
    try {
        return models.user.destroy({where: {id: id}});
    } catch (error) {
        throw error;
    }

};

const getUserByID = async id => {
    try {
        return models.user.findOne({where: {id: id}, include: models.userDetail})
    } catch (error) {
        throw error;
    }
};

const getUserByUUID = async uuid => {
    try {
        return models.user.findOne({where: {uuid: uuid}});
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
    getUserByUUID
};