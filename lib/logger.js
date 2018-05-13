var winston = require('winston');

function add(type, config) {
    var transportType = type === 'file' ? winston.transports.File : '';
    return winston.add(transportType, config);
}

module.exports = {
    info: winston.info,
    add: add
}
