const validator = require('./validators/appointment.validator');
const buildResponse = require('../utils/response/Response');
const service = require('./appointment.service');
const {APPOINTMENT_CREATED, ERR_APPOINTMENT_CREATED} = require('./response/appointment.response');
const {StatusCodes} = require('http-status-codes');

const register = async (req, res) => {
    const {date, type} = req.body;

    try {
        validator.validateCreateAppointment(date, type);

        const appointment = await service.makeAppointment(date, type);

        const response = buildResponse(APPOINTMENT_CREATED.ok, APPOINTMENT_CREATED.message, appointment);

        res.status(StatusCodes.CREATED).send(response);

    } catch (error) {

        const response = buildResponse(APPOINTMENT_CREATED.ok, APPOINTMENT_CREATED.message, {message: error.message});

        res.status(StatusCodes.CONFLICT).send(response);
    }
};