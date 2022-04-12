module.exports = {
    serverError: function (res, error) {
        console.error(error);
        return res.status(500).send('ERROR');
    },

    success: function (res, message) {
        return res.status(200).send(message);
    }
};
