const reservationController = require('./controllers/reservation-controller.js');
const contactController = require('./controllers/contact-controller.js');

module.exports = {
    create: function (app) {
        app.get('/', (req, res) => {
            res.send('Muie Cristi!')
        });
        app.get('/reservation', reservationController.get);
        app.post('/reservation', reservationController.post);
        app.post('/contact', contactController.post);
        app.all('*', (req, res) => res.status(404).send('404!'));
    }
};
