const validator = require('./validators/user.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./user.service');
const {sequelize} = require('../../db/db');
const User = require('./model/User');
const {OK, INTERNAL_SERVER_ERROR, CREATED} = require('http-status-codes');

const register = async (req, res) => {
    const {email, password, userDetail} = req.body;
    try {
        const user = await service.createUser(email, password, userDetail);
        res.status(CREATED).send(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).send(error);
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