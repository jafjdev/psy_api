const validator = require('./validators/user.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./user.service');
const {sequelize} = require('../../db/db');
const User = require('./model/User');

const register = async (req, res) => {
    try {
        const {firstName, lastName, birthday} = req.body;
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            birthday: new Date(birthday.year, birthday.month, birthday.day)//año, mes, fecha
        });
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
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