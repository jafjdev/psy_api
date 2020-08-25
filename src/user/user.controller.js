const validator = require('./validators/user.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./user.service');
const {sequelize} = require('../../db/db');
const User = require('./model/User');
const UserDetail = require('./model/detail/UserDetail');
const http = require('http-status-codes');

const register = async (req, res) => {
    try {
        const {email, password, userDetail: userDetail} = req.body;
        console.log(req.body);
        const user = await User.create({
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
            },
            {
                include: [UserDetail],
            }
        );
        res.status(http.OK).send(user);
    } catch (error) {
        console.log(error);
        res.status(http.OK).send(error);
    }
};

const getAll = async (req, res) => {

};

const getById = async (req, res) => {

};

const deactivate = async (req, res) => {

};

module.exports = {
    register,
    getAll,
    getById,
    deactivate
};