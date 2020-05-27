function generateString(type, data) {
    const colors = {
        "grey": "\u001b[90m",
        "error": "\u001b[31m",
        "info": "\u001b[32m",
        "warn": "\u001b[33m",
        "reset": "\u001b[0m",
        "arrow": String.fromCodePoint(0x25B6)
    }
    let time = new Date().toLocaleTimeString();
    switch (type) {
        case 'info':
            return `${colors.grey}${colors.arrow} ${time}${colors.reset}${colors.info} [INF] ${colors.reset} ${data}`;
        case 'warn':
            return `${colors.grey}${colors.arrow} ${time}${colors.reset}${colors.warn} [WARN]${colors.reset} ${data}`;
        case 'error':
            return `${colors.grey}${colors.arrow} ${time}${colors.reset}${colors.error} [ERR] ${colors.reset} ${data}`;

        default:
            return `${colors.grey}${colors.arrow} ${time}${colors.reset}${colors.info} [INF] ${colors.reset} ${data}`;
    }
}
module.exports = {
    error: (data) => { console.error(generateString('error', data)) },
    info: (data) => { console.log(generateString('info', data)) },
    warn: (data) => { console.log(generateString('warn', data)) },
    httpLogger: (req, res, next) => {
        res.once('finish', () => { })
        console.log(generateString('info', `${req.method} ${res.statusCode} ${req.url} - ${req.ip} `)); next();
    }
};