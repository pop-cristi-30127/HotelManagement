const dbObject = require('./database.js');

module.exports = {
    getDatabaseConnection: function () {
        return dbObject.connect('ertretre', 'ertertr', 'ertert', 'erter');
    }
};
