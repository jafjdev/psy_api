const User = require('./model/User');
const UserDetail = require('./model/detail/UserDetail');
const {sequelize} = require('../../db/db');

const createUser = async (email, password, userDetail) => {
    const transaction = await sequelize.transaction();

    try {
        const user = await User.create(
            {
                email: email,
                password: password,
            },
            {
                transaction: transaction
            }
        );

        const detail = await UserDetail.create(
            {
                firstName: userDetail.firstName,
                lastName: userDetail.lastName,
                birthday: new Date(userDetail.birthday.year, userDetail.birthday.month, userDetail.birthday.day),
                age: userDetail.age,
                gender: userDetail.gender,
                religion: userDetail.religion,
                occupation: userDetail.occupation,
                educationLevel: userDetail.educationLevel,
            },
            {
                transaction: transaction
            }
        );
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }

};

module.exports = {
    createUser
};