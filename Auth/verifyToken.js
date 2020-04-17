const jwt = require('jsonwebtoken');

const secret = 'hdjjdygshdkdidkk'

module.exports = function(req, res, next) {
    const token = req.header('auto-token');
    if(!token) {
        res.status(401).send('Not Access');
    }
    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}