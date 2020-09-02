const validator = require('./validators/user.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./user.service');
const {OK, INTERNAL_SERVER_ERROR, CREATED, CONFLICT, NOT_FOUND} = require('http-status-codes');

const register = async (req, res) => {
    const {email, password, userDetail} = req.body;
    try {
        validator.CreateUserValidator(email, password, userDetail);

        const user = await service.createUser(email, password, userDetail);

        res.status(CREATED).send(user);

    } catch (error) {

        res.status(CONFLICT).send(error);
    }
};

const getAll = async (req, res) => {
    const {page, size} = req.query;

    try {

        const userList = await service.getUsers(page, size);

        res.status(OK).send(userList);

    } catch (error) {

        res.status(INTERNAL_SERVER_ERROR).send(error);

    }
};

const getById = async (req, res) => {
    const {id} = req.query;
    try {
        const user = await service.getUserByID(id);

        res.status(OK).send(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).send(error);
    }
};

const updateUser = async (req, res) => {
    const {id, email, userDetail} = req.body;
    try {
        validator.UpdateUserValidator(id, email, userDetail);

        const user = await service.updateUser(id, email, userDetail);

        res.status(OK).send(user);

    } catch (error) {

        res.status(INTERNAL_SERVER_ERROR).send(error);

    }
};


const deleteUser = async (req, res) => {
    const {id} = req.body;
    try {
        await service.deleteUser(id);
        res.status(OK).send();
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).send(error);
    }

};

module.exports = {
    register,
    getAll,
    getById,
    deleteUser,
    updateUser
};