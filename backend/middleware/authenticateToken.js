const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res
            .status(403)
            .send({
                statusCode: 403,
                message: 'Token is not valid'
            });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified

        next()
    } catch (e) {
        next(e)
    }
}

