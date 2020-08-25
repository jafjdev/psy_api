const buildResponse = (ok, message, data) => (
    {
        ok: ok,
        message: message,
        data: data
    }
);

module.exports = buildResponse;