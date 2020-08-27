const validator = require('./validators/user.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./user.service');
const {OK, INTERNAL_SERVER_ERROR, CREATED} = require('http-status-codes');

const register = async (req, res) => {
    const {email, password, userDetail} = req.body;
    try {
        const user = await service.createUser(email, password, userDetail);
        res.status(CREATED).send(user);
    } catch (error) {

    }
};

const getAll = async (req, res) => {
    const {page, size} = req.query;
    try {
        const userList = await service.getUsers(page, size);
        res.status(OK).send(userList);
    } catch (error) {
        console.log(error);
        res.status(INTERNAL_SERVER_ERROR).send(error);
    }
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